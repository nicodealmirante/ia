import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

const publicDir = path.join(__dirname, '../../public/photobooth')
app.use(express.static(publicDir))

app.listen(PORT, () => {
  console.log(`Photobooth running on http://localhost:${PORT}`)
})
