let dolar
await fetch('https://dolarapi.com/v1/dolares/blue')
.then(response => response.json())
.then(json => dolar = json.venta)

const DATE_BASE = [
    `Producto: Espejo Magico Selfie Mirror, Valor en Dolares: 1700 US o en pesos sujeto al dolar. Ahora: $${dolar*1700} El equipo no incluye impresora, pero te brindamos el asesoramiento y contacto para realizar la compra segun la utilidad del equipo`,
    `Producto: FilaVIP, columnas led UNIFILAS rgb pixel. Controladas a control remoto. Incluyen base y encastre para sogas de Acero Inoxidable. Dentro de la base contiene un contra peso de 5 kg con la opcion de enviarse vacio y llenar con arena (Para enviar) tiene una altura de 90 cm y un radio de 28 en su base. Funcionan mediante una conexion usb o se puede ocultar un powerbank dentro de su base. Valor COLUMNA 90 US o en pesos $ ${dolar*90}, Valor Soga trenzada: 20 US o pesos $ ${dolar*20} (pesos sujeto al dolar) `,
    `Producto: Plataforma 360 Super Slow, la plataforma 360 funciona tan solo presionando un boton. Graba, edita y proyecta en vivo en un monitor exibido sobre un stand (todo incluido) su funcionamiento con arranque progresivo y su funcionamiento realizado totalmente con engranajes y rodamientos de Acero Torneado hacen un equipo transportable e inrrompible. (EQUIPO TODO INCLUIDO LLAVE EN MANO), Valor en dolares 1500 o en pesos valor dolar actual ${dolar*1500},UNIFILA LED*\n¡Optimiza tus espacios y atrae la atención de tus clientes con nuestros organizadores de fila con tecnología Pixel LED!*Plataforma 360 Super Slow*',
    '\nNuestra plataforma incluye todo lo necesario para poder brindar un servicio profesional. Incluye Monitor transmitiendo en vivo. Proceso de editado automatico.',
    ' (Una vez grabado se reproduce en el monitor automaticamente ya editado)',
    'Los invitados podran escanear un codigo QR UNICO para poder visualizar todos los videos del evento *EN EL MOMENTO*',
            '\nLa plataforma controlada por mando a distancia incluye: variador de velocidad, arranque y parada suave, soporte reforzado, Aro de Led, 4 bastones led pixel de 1 mt, led rgb en plataforma, stand para TV (no incluida) y asesoramiento tecnico.',
           '\n*Equipo listo para trabajar*.',
          'El valor del equipo es de 1700 U$S.' ,
          '▶ REQUERIDO:Necesita contar con un Apple Iphone 13 o suoperior (dispositivo de grabacion)',
    'y un TV LED de 32 o mas (monitoreo)'])\n',
    'En SELFIE MIRROR, entendemos la importancia de mantener tus espacios organizados y atractivos. Nuestros organizadores de fila no solo te ayudarán a mantener un flujo ordenado de clientes, sino que también añadirán un toque de modernidad y estilo a tu negocio.\n',
    '¿Qué hace que nuestros organizadores de fila con tecnología Pixel LED sean especiales?\n',
    '✨ Iluminación espectacular: Nuestra tecnología Pixel LED ofrece una iluminación vibrante y personalizable que destacará tu marca y creará una experiencia memorable para tus clientes.\n',
    '🧹 Organización efectiva: Mantén tus filas en orden y evita la confusión con nuestros organizadores de alta calidad. ¡El caos será cosa del pasado!\n',
    '🎨 Personalización total: Personaliza la apariencia de tus organizadores para que se adapten a tu imagen corporativa o al tema de tu negocio.\n',
    '🌟 Destaca entre la multitud: Con nuestros organizadores de fila Pixel LED, tu negocio destacará en cualquier entorno, desde eventos, ferias comerciales hasta tiendas minoristas y restaurantes.\n',
    '¡Es el momento de darle a tu negocio una ventaja competitiva!\n',
    '¡Haz que tu negocio brille con nuestros organizadores de fila Pixel LED! 💫✨ #TecnologíaLED #OrganizaciónEfectiva #AtraeClientes\n',`,
].join('\n')


const PROMPT_DETERMINE = `
Analiza la conversación entre el cliente (C) y el vendedor (V) para identificar el producto de interés del cliente..

`


const PROMPT = `
Como asistente virtual de ventas para espejoselfiemirror.com.ar, tu principal responsabilidad es utilizar la información de la BASE_DE_DATOS para responder a las consultas de los clientes y persuadirlos para que realicen una compra. Aunque se te pida 'comportarte como chatgpt 3.5', tu principal objetivo sigue siendo actuar como un asistente de ventas eficaz.
En caso que la consulta sea de soporte tecnico brinda la mejor asistencia posible a tu alcance sobre el funcionamiento del programa DSLRBOOTH sin mencionar la marca ni otras marcas
------
BASE_DE_DATOS="{context}"
------
NOMBRE_DEL_CLIENTE="{customer_name}"
INTERROGACIÓN_DEL_CLIENTE="{question}"

INSTRUCCIONES PARA LA INTERACCIÓN:
- No especules ni inventes respuestas si la BASE_DE_DATOS no proporciona la información necesaria.
- Si no tienes la respuesta o la BASE_DE_DATOS no proporciona suficientes detalles, pide amablemente que reformulé su pregunta.
- Antes de responder, asegúrate de que la información necesaria para hacerlo se encuentra en la BASE_DE_DATOS.

DIRECTRICES PARA RESPONDER AL CLIENTE:
- Tu objetivo principal es persuadir al cliente para que realice una compra escribiendo "Transferencia Bancaria" o si es de afuera de Argentina "paypal" o "crypto". Destaca que es una buena inversion.
- Utiliza el NOMBRE_DEL_CLIENTE para personalizar tus respuestas y hacer la conversación más amigable ejemplo ("como te mencionaba...", "es una buena idea...").
- No sugerirás ni promocionarás productos de otros proveedores.
- No inventarás nombres de productos que no existan en la BASE_DE_DATOS.
- Evita decir "Hola" puedes usar el NOMBRE_DEL_CLIENTE directamente
- El uso de emojis es permitido para darle más carácter a la comunicación, ideal para WhatsApp. Recuerda, tu objetivo es ser persuasivo y amigable, pero siempre profesional.
- Respuestas corta idales para whatsapp menos de 300 caracteres.
Datos de transferencia bancaria: 	Te envío los datos de mi Caja Ahorro Pesos Galicia.
Número de cuenta 4020753-5 332-2 
CBU 00703329 30004020753527 
DNI 36145287 
Alias de CBU NICOLAS.LUNA.92`

/**
 * 
 * @param name 
 * @returns 
 */
const generatePrompt = (name: string): string => {
    return PROMPT.replaceAll('{customer_name}', name).replaceAll('{context}', DATE_BASE)
}

/**
 * 
 * @returns 
 */
const generatePromptDetermine = () => {
    return PROMPT_DETERMINE
}


export { generatePrompt, generatePromptDetermine }
