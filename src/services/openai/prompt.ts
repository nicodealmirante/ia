let dolar
await fetch('https://dolarapi.com/v1/dolares/blue')
.then(response => response.json())
.then(json => dolar = json.venta)

const DATE_BASE = [
    `Producto: Espejo Magico Selfie Mirror, Valor: en Dolares: 1700 US o en pesos sujeto al dolar. Ahora: $${dolar*1700} DESCRIPCION: nuestro espejo mágico selfie mirror cuenta con con todo lo necesario para funcionar, 
    computadora, táctil que no es el táctil tradicional.  es un táctil qué va detrás del Vidrio Entonces si se moja el vidrio  o le pasa algo. el táctil siempre está cubierto, tiene el vidrio por delante. no es un marco. Por otro lado, 
    tiene todas las conexiones en la parte exterior, osea. conexiones como el USB y la alimentación de la impresora. tiene las fichas por afuera. puertas en la parte posterior para modificar la cámara y otra por si tenemos que conectar algo en la computadora. 
    posee un botón externo para encenderlo y apagarlo. Cuenta con un marco que es a medida del equipo. lo que  no trae son  elementos de decoración. me refiero a las columnas Unifilas. nosotos somos fabricantes de las píxeles. en paquete viene dos sogas con cuatro columnas.
    las fila VIP incluyen la alfombra comprando el combo. tenemos varios tipos de marcos que una vez  que te decidas te los paso así podés elegirlo. la seña que necesito es solamente un compromiso. no es una seña de un porcentaje. solamente un compromiso de diez o quince mil  
    para que cuando yo te arme el equipo me asegure de que le estoy Armando para vos y después no me cuelgues con las cosas que elegistes. el marco o lo que o lo que lleve que elijas vos. Con solo enchufarlo ya funciona. también tiene la posibilidad de personalizarlo. ahora
    actualmente estamos haciendo una asistente inteligente que vos le vas a mandar un mensaje, le vas a decir por ejemplo crea un fondo de 15 años en la medida tanto y te va a mandar  un fondo para que puedas poner  en el en el programa..  Entonces ya directamente no tendrías que hacer nada todo lo haríamos Nosotros.  el equipo mide lo mismo que una televisión de 55 pulgadas, mide 140 x 70 y 20 cm de profundidad. es super fino.  posee ruedas ,  todas las manijas en Qué son cuatro ,punteras redondeadas por si se  golpea no le pase nada,  perfiles de cierre y cierres tipo mariposa de precisión que queda hermético. El equipo puede ser transportado en un coche. Todo está incluido como tal cual te lo muestran en las fotos enviadas y con respecto a la impresora que "NO" está incluida,  yo te voy a asesorar depende el uso que le vayas a dar el equipo y te voy a decir Qué tipo de impresora necesitas Te adelanto un poco lo que te quiero
    decir es que para transportarla. se necesita una impresora que no tenga tintas porque se tapan inyectores transporte.  Ahora sí lo vas a dejar parado en un lugar te recomiendo una impresora de tinta justamente por el costo que tiene de impresión los insumos.
Si la queres buscar te recomiendo para transportar, la MITSUBISHI K60. Eso es lo mejor del mercado.  otra opción es la kodak 305 pero están un 30% porciento mas los insumos y las impresoras son identicas. el equipo pesa 45 kg y tiene un valor de $1500 dólares se
puede abonar en pesos al valor del día del pago. dólar blue venta. por otro lado te comento Es una excelente inversión y actualmente se esta alquilando en 2 horas por 100 000 pesos o $100 dólares. tenemos equipos vendidos en toda Latinoamérica.  y todos nuestros 
clientes tuvieron éxito Con su inversión algunos lo aprovechan para tener un ingreso extra y otros se dedicaron directamente trabajar con el equipo y adquirieron otros equipos. la inversión del equipo se recupera en 30 horas.  o sea $100 cada 2 horas por 15 eventos 30
horas serian los $1500 dólares.
 con la impresora que te recomendé rinde 640 impresiones  que a una cantidad de 30 fotos por evento nos daría 21 eventos Por lo cual cubriremos el valor del equipo y casi toda la impresora con el primer insumo. la impresora imprime en 5 x 15 con las tiritas tradicionales imprime de a dos Qué quiere decir qué te imprime una 10 x 15 y la corta al medio por lo tanto te entrega 5 * 15.  serían 1 280 fotos impresas en 5 x 15 pero no se puede imprimir de a una o sea imprime de a dos por lo tanto serían 640 impresiones pero tendríamos  1280 fotos 5*15 .  el equipo con la pantalla totalmente multitactil  O sea que arrastrando los dos dedos ampliamos y achicamos los ítems de la pantalla.  viene con la posibilidad de llevarte las fotos celular escaneando un código QR así no necesitas impresora o achicas  la cantidad de copias qué imprimes por evento.  más o menos invitado que utiliza el espejo demora 5 minutos en efectuar la sesión por lo tanto 60 minutos por dos que son 2 horas serían 120 minutos dividido 5 minutos qué tenemos por sesión sería 24 sesiones realizadas en el espejo qué se le puede entregar dos copias 5 * 15 y el resto con el QR si lo desean y así tendrías hasta más de 30 eventos con un solo insumo. `,
 
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
Al momento de realizar la compra se solicita una transferencia de un valor de 10 mil pesos. Ya que es solo en motivo de compromiso para personalizar el equipo a su gusto.
Una vez realizada la transferencia enviar el comprobante al whtasapp +54 9 11 4005-4474 para poder comenzar con su pedido y ultimar los detalles.
Datos de transferencia bancaria: 	Te envío los datos de mi Caja Ahorro Pesos Galicia.
Número de cuenta 4020753-5 332-2 
CBU 00703329 30004020753527 
DNI 36145287 
Alias de CBU NICOLAS.LUNA.92  
------------


`
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
