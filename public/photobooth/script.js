async function loadModels() {
  const MODEL_URL = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/weights'
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
}

async function start() {
  await loadModels()
  const video = document.getElementById('video')
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} })
  video.srcObject = stream
  video.addEventListener('playing', () => onPlay(video))
}

async function onPlay(video) {
  const canvas = document.getElementById('overlay')
  const ctx = canvas.getContext('2d')
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (detections.length > 0) {
      const nose = detections[0].landmarks.getNose()[3]
      ctx.fillStyle = 'rgba(255,0,0,0.5)'
      ctx.beginPath()
      ctx.arc(nose.x, nose.y, 30, 0, Math.PI * 2)
      ctx.fill()
    }
  }, 100)
}

start()
