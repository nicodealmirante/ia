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
Alias de CBU NICOLAS.LUNA.92  
------------
EJEMPLOS DE COPNVERSACIONES

[8/10/23, 17:35:09] Gaston - Venta 16-10-23: ‎Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.
[8/10/23, 17:35:09] Gaston - Venta 16-10-23: ‎Gaston - Venta 16-10-23 es un contacto.
[8/10/23, 17:20:53] Gaston - Venta 16-10-23: Hola cómo va?
[8/10/23, 17:21:01] Gaston - Venta 16-10-23: Dónde tienen ubicado el showroom para ir
[8/10/23, 17:56:16] Nicolas 🤳 Selfie Mirror: Hola buenas tardes
[8/10/23, 17:56:20] Nicolas 🤳 Selfie Mirror: En Ramos Mejía
[8/10/23, 17:58:39] Gaston - Venta 16-10-23: Soy de la pampa y estaba pensando en viajar está semana a buenos aires por un espejo mágico
[8/10/23, 17:58:44] Gaston - Venta 16-10-23: Cómo una inversión
[8/10/23, 17:58:51] Gaston - Venta 16-10-23: A qué precio se lo puede alquilar?
[8/10/23, 17:58:59] Gaston - Venta 16-10-23: Acá donde vivo nadie tiene y sería algo nuevo
[8/10/23, 17:59:17] Nicolas 🤳 Selfie Mirror: Que parte de la pampa
[8/10/23, 17:59:28] Gaston - Venta 16-10-23: Igual iría a buscarlo en persona
[8/10/23, 17:59:32] Nicolas 🤳 Selfie Mirror: El alquiler en Buenos Aires está 100 dólares
[8/10/23, 17:59:45] Nicolas 🤳 Selfie Mirror: Pero en el interior siempre se cobra un poco más
[8/10/23, 17:59:54] Gaston - Venta 16-10-23: Lo puedo traer conmigo
[8/10/23, 18:00:04] Nicolas 🤳 Selfie Mirror: Mínimo 100 mil
[8/10/23, 18:00:08] Gaston - Venta 16-10-23: Y el tema de la impresora?
[8/10/23, 18:00:15] Nicolas 🤳 Selfie Mirror: De qué parte sos
[8/10/23, 18:00:15] Gaston - Venta 16-10-23: Que costos tiene
[8/10/23, 18:00:21] Gaston - Venta 16-10-23: Victorica la pampa
[8/10/23, 18:00:27] Gaston - Venta 16-10-23: A 150 km de Sta rosa
[8/10/23, 18:00:38] Nicolas 🤳 Selfie Mirror: Aver
[8/10/23, 18:01:12] Nicolas 🤳 Selfie Mirror: Gral acta?
[8/10/23, 18:01:18] Nicolas 🤳 Selfie Mirror: Acha?
[8/10/23, 18:01:22] Nicolas 🤳 Selfie Mirror: Muy lejos?
[8/10/23, 18:01:26] Gaston - Venta 16-10-23: Nono, Acha queda para el otro lado
[8/10/23, 18:01:33] Gaston - Venta 16-10-23: Cp 6319
[8/10/23, 18:01:46] Nicolas 🤳 Selfie Mirror: Sisi toy buscando alquileres
[8/10/23, 18:01:50] Nicolas 🤳 Selfie Mirror: Que no pude cubrir
[8/10/23, 18:01:59] Nicolas 🤳 Selfie Mirror: Porq no tengo a nadie en la pampa
[8/10/23, 18:02:18] Nicolas 🤳 Selfie Mirror: Quería saber el tema del alquiler del espejo
[8/10/23, 18:02:18] Nicolas 🤳 Selfie Mirror: De la pampa general pico
[8/10/23, 18:02:24] Gaston - Venta 16-10-23: 1500 USD de contado el espejo?
[8/10/23, 18:02:44] Gaston - Venta 16-10-23: Acá por ejemplo viene una persona que lo alquila desde gral pico las 2 horas 95 mil cobra
[8/10/23, 18:03:08] Nicolas 🤳 Selfie Mirror: Está bien
[8/10/23, 18:03:27] Nicolas 🤳 Selfie Mirror: Tal vez lo conozca
[8/10/23, 18:03:45] Gaston - Venta 16-10-23: En un estimativo un retorno de la inversión
[8/10/23, 18:03:59] Gaston - Venta 16-10-23: Dos fiestas por fin de semana es algo realista?
[8/10/23, 18:04:12] Gaston - Venta 16-10-23: Acá es un pueblo de 7mil habitantes pero hay pueblitos alrededor también
[8/10/23, 18:04:16] Gaston - Venta 16-10-23: Y siempre hay fiestas
[8/10/23, 18:04:20] Nicolas 🤳 Selfie Mirror: Mira
[8/10/23, 18:04:39] Nicolas 🤳 Selfie Mirror: El voy a ser sincero porq esa es la idea
[8/10/23, 18:04:50] Nicolas 🤳 Selfie Mirror: El tema de 2 por fin de semana es así
[8/10/23, 18:05:01] Nicolas 🤳 Selfie Mirror: La mayoría de los eventos son sábados
[8/10/23, 18:05:19] Nicolas 🤳 Selfie Mirror: La posibilidad la tenes el tema es que es muy difícil de hacer
[8/10/23, 18:05:36] Nicolas 🤳 Selfie Mirror: Por el tema q siempre son sábados y de 10 a 12
[8/10/23, 18:05:44] Nicolas 🤳 Selfie Mirror: O 9 a 11
[8/10/23, 18:05:59] Nicolas 🤳 Selfie Mirror: Yo tengo 3 equipos
[8/10/23, 18:06:32] Nicolas 🤳 Selfie Mirror: Y los cubro pero si tenes un solo equipo es difícil
[8/10/23, 18:06:31] Gaston - Venta 16-10-23: A bien, acá lo veo como un buen nicho, por el tema que no hay nadie que lo haga y en lo que es fiesta los pampeanos no escatiman,
[8/10/23, 18:06:45] Gaston - Venta 16-10-23: Me gustaría empezar con uno
[8/10/23, 18:07:00] Gaston - Venta 16-10-23: Y desp sumar la plataforma 360 y si me es muy rentable comprar otro espejo y así
‎[8/10/23, 18:07:05] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[8/10/23, 18:08:00] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[8/10/23, 18:08:55] Gaston - Venta 16-10-23: Ah mira vos
[8/10/23, 18:09:13] Gaston - Venta 16-10-23: Y el tema de la impresora? Que precios tienen algo bueno
‎[8/10/23, 18:09:17] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[8/10/23, 18:09:22] Gaston - Venta 16-10-23: Para brindar un buen servicios como vos decís
[8/10/23, 18:09:36] Gaston - Venta 16-10-23: Me gustaría sumar una alfombra roja algo de cotillón
[8/10/23, 18:09:48] Gaston - Venta 16-10-23: Cómo si fuera la entrada a los Oscars y el espejo en el centro
‎[8/10/23, 18:10:49] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[8/10/23, 18:11:32] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[8/10/23, 18:12:07] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[8/10/23, 18:13:14] Gaston - Venta 16-10-23: Dale me interesaría viajar por el espejo
[8/10/23, 18:13:45] Nicolas 🤳 Selfie Mirror: No contamos con stock en este momento para entrega inmediata
[8/10/23, 18:13:45] Gaston - Venta 16-10-23: Otra consulta, aceptan tarjeta de crédito? O es solo cash al cambio blue o billete
[8/10/23, 18:14:06] Nicolas 🤳 Selfie Mirror: Estamos sacando los de pedido
[8/10/23, 18:14:10] Nicolas 🤳 Selfie Mirror: Una semana de demora
[8/10/23, 18:14:16] Nicolas 🤳 Selfie Mirror: Es temporada ahora
[8/10/23, 18:14:26] Nicolas 🤳 Selfie Mirror: Fin de año
[8/10/23, 18:15:08] Nicolas 🤳 Selfie Mirror: Se encarga con una seña del monto que vos quieras como compromiso
[8/10/23, 18:15:31] Nicolas 🤳 Selfie Mirror: Cuando venis si no te gusta te la devuelvo sin problema
[8/10/23, 18:16:12] Gaston - Venta 16-10-23: Igual viajaría por una semana, el tema es que me gustaría verlos en persona
[8/10/23, 18:16:17] Gaston - Venta 16-10-23: Y viajo con cash
[8/10/23, 18:16:38] Gaston - Venta 16-10-23: Osea una semana me puedo quedar en buenos aires
[8/10/23, 18:17:40] Nicolas 🤳 Selfie Mirror: Y  es complicado .. pero de alguna manera lo resolvemos
[8/10/23, 18:17:48] Nicolas 🤳 Selfie Mirror: Más q nada por el tema de los marcos
[8/10/23, 18:18:10] Nicolas 🤳 Selfie Mirror: Que lo Tenes q elegir y hacer el pedido
[8/10/23, 18:18:43] Nicolas 🤳 Selfie Mirror: Y necesito una seña para eso, el equipo es el mismo
[8/10/23, 18:19:01] Gaston - Venta 16-10-23: Y para quedarme tranquilo con el tema de transferir y eso
[8/10/23, 18:19:17] Gaston - Venta 16-10-23: Yo viajo voy al local y ahí te pago
[8/10/23, 18:19:25] Gaston - Venta 16-10-23: Y me quedo los días que me digas que lo tendrás
[8/10/23, 18:19:33] Nicolas 🤳 Selfie Mirror: Listo
[8/10/23, 18:19:35] Gaston - Venta 16-10-23: El tema que mañana o pasado tendría que sacar los vuelos
[8/10/23, 18:19:46] Nicolas 🤳 Selfie Mirror: Dale sisi
[8/10/23, 18:19:48] Nicolas 🤳 Selfie Mirror: No hay drama
[8/10/23, 18:20:03] Gaston - Venta 16-10-23: Y tengo solo está semana y días de la otra solamente
[8/10/23, 18:20:08] Nicolas 🤳 Selfie Mirror: si me decís para que fecha trato de tenerlo armado
[8/10/23, 18:20:14] Nicolas 🤳 Selfie Mirror: Y de última te mando el marco
[8/10/23, 18:20:19] Gaston - Venta 16-10-23: Porque desp tengo que viajar a Tucumán y el desp se vota
[8/10/23, 18:20:35] Gaston - Venta 16-10-23: Pasando en limpio 1500 USD el espejo
[8/10/23, 18:20:43] Nicolas 🤳 Selfie Mirror: Si
[8/10/23, 18:20:45] Gaston - Venta 16-10-23: Y con 200 mil más compro la kodak que me decías?
[8/10/23, 18:20:52] Nicolas 🤳 Selfie Mirror: No
[8/10/23, 18:20:54] Nicolas 🤳 Selfie Mirror: El insumo
[8/10/23, 18:20:59] Nicolas 🤳 Selfie Mirror: Ahí te paso
[8/10/23, 18:21:03] Gaston - Venta 16-10-23: Ah y la impresora que precio tiene?
[8/10/23, 18:21:05] Nicolas 🤳 Selfie Mirror: Lo de la impresora
[8/10/23, 18:21:08] Nicolas 🤳 Selfie Mirror: Yo no las vendo


OTRO EJEMPLO:
[20/7/23, 11:26:33] Selfie ANA RIO GALLEGOS 2023 Venta: ‎Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.
[20/7/23, 11:26:33] Nicolas 🤳 Selfie Mirror: Hola Ana, buen dia
[20/7/23, 11:26:47] Nicolas 🤳 Selfie Mirror: Soy Nicolás, de Selfie Mirror
[20/7/23, 11:29:36] Selfie ANA RIO GALLEGOS 2023 Venta: Buen dia como estas
[20/7/23, 11:29:46] Nicolas 🤳 Selfie Mirror: Bien Gracias
[20/7/23, 11:59:50] Nicolas 🤳 Selfie Mirror: Qué producto le interesa?
[20/7/23, 12:00:10] Selfie ANA RIO GALLEGOS 2023 Venta: el espejo!
[20/7/23, 12:18:38] Nicolas 🤳 Selfie Mirror: Tengo el modelo slim
[20/7/23, 12:21:00] Selfie ANA RIO GALLEGOS 2023 Venta: y me contas un poco como es el mecanismo
[20/7/23, 12:21:02] Selfie ANA RIO GALLEGOS 2023 Venta: o tenes algun video!
[20/7/23, 12:21:11] Nicolas 🤳 Selfie Mirror: Si
‎[20/7/23, 12:23:44] Nicolas 🤳 Selfie Mirror: ‎Video omitido
‎[20/7/23, 12:24:11] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[20/7/23, 12:27:35] Selfie ANA RIO GALLEGOS 2023 Venta: Genial. y precios![?
[20/7/23, 12:27:38] Selfie ANA RIO GALLEGOS 2023 Venta: formas de pago
[20/7/23, 12:27:58] Nicolas 🤳 Selfie Mirror: 1500 dólares no incluye impresora
[20/7/23, 12:28:07] Nicolas 🤳 Selfie Mirror: La impresora la podes comprar por Mercado libre
[20/7/23, 12:28:15] Nicolas 🤳 Selfie Mirror: Con tarjeta en 6 sin interés
[20/7/23, 12:28:45] Nicolas 🤳 Selfie Mirror: El espejo en efectivo/transferencias
[20/7/23, 12:28:58] Nicolas 🤳 Selfie Mirror: Tipo de cambio dolar Blue al momento de la seña
[20/7/23, 12:29:07] Nicolas 🤳 Selfie Mirror: Demora 7 días de seña a entrega
[20/7/23, 12:29:32] Selfie ANA RIO GALLEGOS 2023 Venta: yo soy de tierra del fuego y tengo alla un tranporte donde deberian entregarmelo
[20/7/23, 12:29:34] Selfie ANA RIO GALLEGOS 2023 Venta: lo llevan?
[20/7/23, 12:29:43] Nicolas 🤳 Selfie Mirror: La seña es de cualquier monto
[20/7/23, 12:29:44] Selfie ANA RIO GALLEGOS 2023 Venta: la impresora cuanto cuesta]?
[20/7/23, 12:29:47] Nicolas 🤳 Selfie Mirror: Solo un compromiso
[20/7/23, 12:30:02] Nicolas 🤳 Selfie Mirror: Si entregamos ya en tierra del fuego
[20/7/23, 12:30:03] Selfie ANA RIO GALLEGOS 2023 Venta: q impresora es, q tipo de papel lleva despues y todo eso
[20/7/23, 12:30:07] Nicolas 🤳 Selfie Mirror: En usuahia
[20/7/23, 12:30:20] Nicolas 🤳 Selfie Mirror: Yo recomiendo la Kodak 305
[20/7/23, 12:30:26] Nicolas 🤳 Selfie Mirror: Pero podes usar cualquiera
[20/7/23, 12:30:28] Selfie ANA RIO GALLEGOS 2023 Venta: Yo estoy en rg pero con que me lo dejen en el transporte que les digo esta bien
[20/7/23, 12:30:42] Nicolas 🤳 Selfie Mirror: Sisi el despacho es sin cargo
[20/7/23, 12:31:19] Nicolas 🤳 Selfie Mirror: Va bien embalado y de todos modos es muy seguro
[20/7/23, 12:31:35] Nicolas 🤳 Selfie Mirror: El vidrio es templado
[20/7/23, 12:31:53] Selfie ANA RIO GALLEGOS 2023 Venta: Y las imagenes se pueden enviar directamente a mail o redes[? como se configura
[20/7/23, 12:31:59] Nicolas 🤳 Selfie Mirror: Si
[20/7/23, 12:32:12] Nicolas 🤳 Selfie Mirror: Se puede y también quedan guardas en el equipo
[20/7/23, 12:32:23] Nicolas 🤳 Selfie Mirror: Guardadas
[20/7/23, 12:32:44] Nicolas 🤳 Selfie Mirror: Pero mira yo se las mando después
[20/7/23, 12:32:56] Selfie ANA RIO GALLEGOS 2023 Venta: Y la impresora cuanto cuesta][?
[20/7/23, 12:32:57] Nicolas 🤳 Selfie Mirror: Si queres hacemos una video llamada y te muestro todo
[20/7/23, 12:33:23] Selfie ANA RIO GALLEGOS 2023 Venta: dale, yo ahora esyoy en la oficina, pero cuando llegue  ami casa te hablo y la hacemos
‎[20/7/23, 12:33:48] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[20/7/23, 12:33:56] Nicolas 🤳 Selfie Mirror: Dale genial
[20/7/23, 12:34:09] Nicolas 🤳 Selfie Mirror: Te muestro la impresora todo para que veas porq la recomiendo
[20/7/23, 12:36:51] Selfie ANA RIO GALLEGOS 2023 Venta: y te consulto, cuanto sale el alquiler para una noche del espejo! xq yo no me dedico a esto, estoy organizando el evento de mi empresa, los 40 años y lo quiero para ir, pero despues por cuanto podria alquilarlo para recuperar la inversion
[20/7/23, 12:39:04] Nicolas 🤳 Selfie Mirror: Mira acá lo estan alquilando entre 70 y 100 por 3 horas
[20/7/23, 12:39:19] Nicolas 🤳 Selfie Mirror: A los que le vendí allá lo alquilaban más caro
[20/7/23, 12:39:27] Selfie ANA RIO GALLEGOS 2023 Venta: 100 mil ]??????
[20/7/23, 12:39:28] Nicolas 🤳 Selfie Mirror: Bastante más caros
[20/7/23, 12:39:29] Selfie ANA RIO GALLEGOS 2023 Venta: jajajajaja
[20/7/23, 12:39:31] Selfie ANA RIO GALLEGOS 2023 Venta: laaaaaa mierda
[20/7/23, 12:39:34] Selfie ANA RIO GALLEGOS 2023 Venta: no me imahine tanto
[20/7/23, 12:39:34] Nicolas 🤳 Selfie Mirror: Sisi
[20/7/23, 12:39:35] Selfie ANA RIO GALLEGOS 2023 Venta: jajajajaj
[20/7/23, 12:39:46] Nicolas 🤳 Selfie Mirror: Yo lo alquilo x 2 hs
[20/7/23, 12:40:01] Nicolas 🤳 Selfie Mirror: Porque tengo 3 equipos que alquilo
[20/7/23, 12:40:44] Nicolas 🤳 Selfie Mirror: Yo los tengo en 50 las 2 horas para estos meses y 80 para el año que viene
[20/7/23, 12:41:11] Selfie ANA RIO GALLEGOS 2023 Venta: osea q lo recuperaria rapido!
[20/7/23, 12:41:12] Selfie ANA RIO GALLEGOS 2023 Venta: jajajajaja
[20/7/23, 12:41:14] Nicolas 🤳 Selfie Mirror: Tengo al menos 1 alquiler x cada sábado
[20/7/23, 12:41:23] Nicolas 🤳 Selfie Mirror: Hasta fin de año
[20/7/23, 12:41:30] Selfie ANA RIO GALLEGOS 2023 Venta: bueno dale, lo veo esta tarde con mi hermano y te confirmo esta noche!!
[20/7/23, 12:41:31] Nicolas 🤳 Selfie Mirror: Si es una buena inversión
[20/7/23, 12:41:39] Selfie ANA RIO GALLEGOS 2023 Venta: siii me parece q si!
[20/7/23, 12:41:44] Nicolas 🤳 Selfie Mirror: Pero hay q moverse para alquilarlo
[20/7/23, 12:41:53] Selfie ANA RIO GALLEGOS 2023 Venta: y vos vas lo llevas dejas las impresora todo y lo retiras a las dos horas !
[20/7/23, 12:41:53] Nicolas 🤳 Selfie Mirror: Ir a los salones
[20/7/23, 12:42:02] Nicolas 🤳 Selfie Mirror: Ofrecer comisión
[20/7/23, 12:42:09] Nicolas 🤳 Selfie Mirror: No
[20/7/23, 12:42:13] Nicolas 🤳 Selfie Mirror: Se queda un operador
[20/7/23, 12:42:18] Selfie ANA RIO GALLEGOS 2023 Venta: claro- eso tiene q tenes q clavarte los finde!
[20/7/23, 12:42:31] Selfie ANA RIO GALLEGOS 2023 Venta: ahhhh! claro!
[20/7/23, 12:42:54] Nicolas 🤳 Selfie Mirror: Yo voy con la camioneta y los descargo con un operador
[20/7/23, 12:43:02] Nicolas 🤳 Selfie Mirror: Hago la vuelta y después los paso a buscar
[20/7/23, 12:43:27] Nicolas 🤳 Selfie Mirror: El equipo lo prendes y funciona
[20/7/23, 12:43:50] Nicolas 🤳 Selfie Mirror: Tiene un botón atrás, prendes de ahí control remoto a la tv y listo..
[20/7/23, 12:45:02] Selfie ANA RIO GALLEGOS 2023 Venta: claro, no es tan dificiñl! y los repuestos de la impresora, osea tinta papel sabes los valores¡?
‎[20/7/23, 12:46:04] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:46:05] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[20/7/23, 12:46:35] Nicolas 🤳 Selfie Mirror: Mira ese es mi cliente
[20/7/23, 12:46:37] Nicolas 🤳 Selfie Mirror: Tiene mis fotos
[20/7/23, 12:46:40] Nicolas 🤳 Selfie Mirror: 🤣
[20/7/23, 12:47:02] Nicolas 🤳 Selfie Mirror: 80 y 130 lo está alquilando
[20/7/23, 12:47:12] Nicolas 🤳 Selfie Mirror: En la segunda foto dice
[20/7/23, 12:47:27] Nicolas 🤳 Selfie Mirror: Cada insumo te rinde 20 fiestas aproxima
[20/7/23, 12:47:33] Selfie ANA RIO GALLEGOS 2023 Venta: Esta bueno xhe jajajaja me tira atrás el trabajo nomás Jajajajaja pero es darle comisión a uno y ya !!!
‎[20/7/23, 12:47:38] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[20/7/23, 12:47:53] Selfie ANA RIO GALLEGOS 2023 Venta: Y las fotos salen con el nombre de la fiesta y eso! Ósea como los de la fotk cabina
[20/7/23, 12:47:57] Selfie ANA RIO GALLEGOS 2023 Venta: Se entiende lo q ge digo
[20/7/23, 12:48:06] Nicolas 🤳 Selfie Mirror: Sisi
[20/7/23, 12:48:05] Selfie ANA RIO GALLEGOS 2023 Venta: Perdón tantas preguntas jajajaa
[20/7/23, 12:48:12] Nicolas 🤳 Selfie Mirror: Es todo personslible
[20/7/23, 12:48:22] Nicolas 🤳 Selfie Mirror: Difícil de explicar por acá
[20/7/23, 12:48:28] Nicolas 🤳 Selfie Mirror: Te muestro en la llamada
[20/7/23, 12:49:02] Selfie ANA RIO GALLEGOS 2023 Venta: Genial dale
‎[20/7/23, 19:41:17] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
‎[20/7/23, 19:43:30] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[21/7/23, 10:40:29] Nicolas 🤳 Selfie Mirror: Hola buen día
[21/7/23, 11:22:47] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buen día !!! Cómo estás
[21/7/23, 12:00:40] Nicolas 🤳 Selfie Mirror: bien, a que hora te liberas asi hacemos la videollamada asi me organizo
[21/7/23, 12:03:48] Selfie ANA RIO GALLEGOS 2023 Venta: Siii, tipo 2 o 3 puede ser
[21/7/23, 12:03:49] Selfie ANA RIO GALLEGOS 2023 Venta: ?
[21/7/23, 12:04:05] Nicolas 🤳 Selfie Mirror: Dale genial!!
[21/7/23, 14:25:26] Selfie ANA RIO GALLEGOS 2023 Venta: En un ratito te llamo!
[21/7/23, 14:59:47] Selfie ANA RIO GALLEGOS 2023 Venta: Avísame y te llamo
[21/7/23, 15:00:38] Nicolas 🤳 Selfie Mirror: Dame 15 minutos
[21/7/23, 15:24:53] Nicolas 🤳 Selfie Mirror: Hola
[21/7/23, 15:24:55] Nicolas 🤳 Selfie Mirror: Estoy
[21/7/23, 15:25:08] Nicolas 🤳 Selfie Mirror: Lo prendo y te llamo te parece?
[21/7/23, 15:25:19] Selfie ANA RIO GALLEGOS 2023 Venta: Dale dale

[21/7/23, 17:06:17] Nicolas 🤳 Selfie Mirror: ese es el marco que te comentaba
[21/7/23, 17:06:25] Nicolas 🤳 Selfie Mirror: ese es el modelo del espejo con tapa y sin tapa

[21/7/23, 17:09:31] Nicolas 🤳 Selfie Mirror: Es un adicional
[21/7/23, 17:12:23] Nicolas 🤳 Selfie Mirror: ‎Eliminaste este mensaje.
[21/7/23, 17:12:50] Nicolas 🤳 Selfie Mirror: Las 4 columnas con 2 sogas y alfombra
[21/7/23, 17:13:24] Nicolas 🤳 Selfie Mirror: $ 116.000 - Plateadas
$ 165.000 - Doradas
[21/7/23, 17:14:10] Nicolas 🤳 Selfie Mirror: Marco Adicional: 75.000 $
[21/7/23, 17:15:05] Nicolas 🤳 Selfie Mirror: Valor del espejo:
[21/7/23, 17:15:21] Nicolas 🤳 Selfie Mirror: 790.000  $
[21/7/23, 17:15:55] Nicolas 🤳 Selfie Mirror: Con 1 marco sin cargo a elección.
[21/7/23, 17:17:39] Nicolas 🤳 Selfie Mirror: Una vez realizada la seña el equipo esta listo en 7 a 10 dias
[21/7/23, 17:17:47] Selfie ANA RIO GALLEGOS 2023 Venta: Y la impresora !!??? Tenes vos igual?
[21/7/23, 17:18:10] Nicolas 🤳 Selfie Mirror: La puedo comprar por vos, pero te conviene comprarla por mercado libre
[21/7/23, 17:18:15] Nicolas 🤳 Selfie Mirror: tenes 6 pagos sin interes
[21/7/23, 17:18:21] Nicolas 🤳 Selfie Mirror: si queres yo la recibo no tengo problema
[21/7/23, 17:18:24] Nicolas 🤳 Selfie Mirror: te mando todo junto
[21/7/23, 17:18:50] Selfie ANA RIO GALLEGOS 2023 Venta: Ah dale genial si ) xq Mercado libre no hace envíos acá !!!
[21/7/23, 17:19:04] Nicolas 🤳 Selfie Mirror: Sinceramente, antes teníamos una bonificación, ahora me sale lo mismo que lo que esta en MercadoLibre y te da cuotas sin interes
[21/7/23, 17:19:09] Nicolas 🤳 Selfie Mirror: yo la tengo que facturar encima
[21/7/23, 17:19:18] Nicolas 🤳 Selfie Mirror: 😓
[21/7/23, 17:19:35] Nicolas 🤳 Selfie Mirror: por ese motivo dejamos de venderlas
[21/7/23, 17:20:19] Nicolas 🤳 Selfie Mirror: Si no hay problema,
[21/7/23, 17:20:31] Nicolas 🤳 Selfie Mirror: Te conviene pagar con tarjeta?
[21/7/23, 17:20:46] Nicolas 🤳 Selfie Mirror: sino podes transferirle directamente a ellos y la retiro
[21/7/23, 17:21:10] Selfie ANA RIO GALLEGOS 2023 Venta: Claro olvídate !!!! Listo ahí arreglo con ellso y te aviso! Y comPro también un combo de repuestos para la impresora
[21/7/23, 17:21:15] Selfie ANA RIO GALLEGOS 2023 Venta: Ahora defino el marco
[21/7/23, 17:21:17] Selfie ANA RIO GALLEGOS 2023 Venta: Y te aviso
[21/7/23, 17:21:20] Nicolas 🤳 Selfie Mirror: Dale
[21/7/23, 17:21:22] Nicolas 🤳 Selfie Mirror: Disglas
[21/7/23, 17:21:22] Selfie ANA RIO GALLEGOS 2023 Venta: Pásame la cta p transferir
[21/7/23, 17:21:24] Nicolas 🤳 Selfie Mirror: Se llaman
[21/7/23, 17:21:36] Nicolas 🤳 Selfie Mirror: El distribuidor de Kodak
[21/7/23, 17:21:49] Nicolas 🤳 Selfie Mirror: te paso su numero
[21/7/23, 17:22:05] Selfie ANA RIO GALLEGOS 2023 Venta: Ah dale buenísimo! Pásame !!!
[21/7/23, 17:22:12] Selfie ANA RIO GALLEGOS 2023 Venta: Cuanto sale el baúl
?
[21/7/23, 17:22:27] Selfie ANA RIO GALLEGOS 2023 Venta: Tenes fotos de las
Columnas plateadas !
‎[21/7/23, 17:23:55] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:24:02] Nicolas 🤳 Selfie Mirror: Ahí le saco
‎[21/7/23, 17:24:42] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:25:22] Nicolas 🤳 Selfie Mirror: Ya lo cotizo
[21/7/23, 17:25:31] Nicolas 🤳 Selfie Mirror: Te cuento que es pesado…
[21/7/23, 17:25:39] Nicolas 🤳 Selfie Mirror: Es cómodo pero es pesado
[21/7/23, 17:25:47] Nicolas 🤳 Selfie Mirror: Una persona no lo puede levantar
[21/7/23, 17:25:53] Nicolas 🤳 Selfie Mirror: Tiene ruedas
[21/7/23, 17:26:03] Nicolas 🤳 Selfie Mirror: Pero si lo Tenes q subir al coche está difícil
[21/7/23, 17:26:49] Nicolas 🤳 Selfie Mirror: Yo los uso, pero algunos clientes no lo usaron por el peso
[21/7/23, 17:27:02] Nicolas 🤳 Selfie Mirror: Es más liviano el espejo que el baúl 🤣
[21/7/23, 17:27:37] Nicolas 🤳 Selfie Mirror: Las bases de las columnas son. Pesaditas y la impresora también
[21/7/23, 17:27:47] Nicolas 🤳 Selfie Mirror: Todo junto es bastante pesado..
[21/7/23, 17:29:53] Nicolas 🤳 Selfie Mirror: 125.000 sale el baúl
[21/7/23, 17:30:12] Nicolas 🤳 Selfie Mirror: Te lo  muestro
[21/7/23, 17:30:31] Selfie ANA RIO GALLEGOS 2023 Venta: Jajajajajajaja pero es más incómodo todo separado!
[21/7/23, 17:30:50] Selfie ANA RIO GALLEGOS 2023 Venta: Dale genial ahí defino con mi marido los marcos y te digo
‎[21/7/23, 17:31:26] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:31:57] Nicolas 🤳 Selfie Mirror: Si las columnas separadas son un lío
[21/7/23, 17:32:54] Nicolas 🤳 Selfie Mirror: Pero yo te aviso para que sepas 😅
‎[21/7/23, 17:33:08] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:34:13] Nicolas 🤳 Selfie Mirror: Tanto el espejo como este cajón llevan todas las punteras redondas manijas rebatibles cierres mariposa y ángulos de encastre para que la tapa quede sellada
‎[21/7/23, 17:40:48] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:49] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:49] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:52] Nicolas 🤳 Selfie Mirror: ‎Video omitido
‎[21/7/23, 17:40:52] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:53] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:40:53] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:51:09] Selfie ANA RIO GALLEGOS 2023 Venta: Si si está bueno el baúl más q nada también p guardar las cosas
[21/7/23, 17:51:14] Selfie ANA RIO GALLEGOS 2023 Venta: Más allá de transportarlo
[22/7/23, 12:08:53] Selfie ANA RIO GALLEGOS 2023 Venta: Buen día!!! 
Cómo estás ! 
Ahora al medio día decidimos el modelo y todo y te aviso
[22/7/23, 16:27:32] Selfie ANA RIO GALLEGOS 2023 Venta: Hola ! 
Listo! Definido ! Espejo con Marco oro 1 ! 
Columnas doradas 
Baúl para columnas !
[23/7/23, 10:17:55] Nicolas 🤳 Selfie Mirror: Hola buen día
[23/7/23, 10:34:58] Nicolas 🤳 Selfie Mirror: Producto	                Cantidad	                Totales
Baul Transporte Columnas	× 1       $ 125.000,00
Columnas - Doradas                 × 1	$ 165.000,00
Equipo Selfie Mirror SLIM	× 1	$ 800.000,00
Subtotal:	                                   $ 1.090.000,00
Método de pago:	Efectivo
Total:	$ 1.090.000,00
[23/7/23, 10:39:26] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buen día ! 
Dale! 
Consulta, q dolar tomas?
[23/7/23, 10:39:45] Nicolas 🤳 Selfie Mirror: Blue venta
[23/7/23, 10:40:44] Selfie ANA RIO GALLEGOS 2023 Venta: 793500 me da puede ser ! No es mucha la dif pero me pago el flete jajajaajajajajaja
[23/7/23, 10:40:52] Selfie ANA RIO GALLEGOS 2023 Venta: Dame un ratito y te transfiero la mitad
[23/7/23, 10:41:02] Nicolas 🤳 Selfie Mirror: Aver
[23/7/23, 10:41:39] Nicolas 🤳 Selfie Mirror: Tenes razón
[23/7/23, 10:41:46] Nicolas 🤳 Selfie Mirror: En la app dice 529
[23/7/23, 10:43:00] Nicolas 🤳 Selfie Mirror: 1.080.000
[23/7/23, 10:43:13] Nicolas 🤳 Selfie Mirror: Hacemos
[23/7/23, 10:43:16] Nicolas 🤳 Selfie Mirror: Perdón
[23/7/23, 10:48:47] Nicolas 🤳 Selfie Mirror: Te voy a pedir tus datos
[23/7/23, 10:49:20] Nicolas 🤳 Selfie Mirror: Tuyos o quien reciba y entrega
[23/7/23, 10:49:45] Selfie ANA RIO GALLEGOS 2023 Venta: Tranqui no pasa nada !
[23/7/23, 10:50:16] Selfie ANA RIO GALLEGOS 2023 Venta: Te paso mi nombre y el transporte a donde necesito q me lo envíes ! Después me pasas si queres lo q ge cobran para mandarlo ahí y también te mando
[23/7/23, 10:50:27] Selfie ANA RIO GALLEGOS 2023 Venta: Si voy a comprar
La
Impresora así te la mandan. Vos ! Dale
[23/7/23, 10:50:28] Selfie ANA RIO GALLEGOS 2023 Venta: ?
[23/7/23, 10:51:33] Nicolas 🤳 Selfie Mirror: Si, por donde la vas a comprar?
[23/7/23, 10:51:53] Nicolas 🤳 Selfie Mirror: Mercado Libre o directamente a Disglas por transferencia
[23/7/23, 10:52:47] Selfie ANA RIO GALLEGOS 2023 Venta: DIRECTAMENTE A ELLOS SEGURO!
[23/7/23, 10:52:55] Nicolas 🤳 Selfie Mirror: Oki te  paso el contacto
[23/7/23, 10:53:01] Selfie ANA RIO GALLEGOS 2023 Venta: esa es tu cuenta¡?
[23/7/23, 10:53:06] Selfie ANA RIO GALLEGOS 2023 Venta: pasame el cuil porfa
[23/7/23, 10:53:17] Nicolas 🤳 Selfie Mirror: Ya te paso
[23/7/23, 10:55:41] Selfie ANA RIO GALLEGOS 2023 Venta: Natalia Fernández la titular?
‎[23/7/23, 10:58:09] Selfie ANA RIO GALLEGOS 2023 Venta: espejo.pdf • ‎1 página ‎documento omitido
[23/7/23, 10:59:03] Nicolas 🤳 Selfie Mirror: si Natalia romina
[23/7/23, 10:59:35] Nicolas 🤳 Selfie Mirror: Genial
[23/7/23, 10:59:36] Nicolas 🤳 Selfie Mirror: Gracias
[23/7/23, 10:59:46] Selfie ANA RIO GALLEGOS 2023 Venta: a vos!
[23/7/23, 10:59:54] Selfie ANA RIO GALLEGOS 2023 Venta: en la semana te paso bien los datos de a donde despchar!
[23/7/23, 11:00:05] Selfie ANA RIO GALLEGOS 2023 Venta: y cuando hable con los de la impresora te aviso asi me pasas la dire de donde mandarla
[23/7/23, 11:00:11] Nicolas 🤳 Selfie Mirror: te paso mis datos
[23/7/23, 11:00:38] Nicolas 🤳 Selfie Mirror: Nicolas Ezequiel Luna de Selfie Mirror en Ramos Mejia
[23/7/23, 11:00:51] Nicolas 🤳 Selfie Mirror: a los de la impresora le decis asi y listo
[23/7/23, 11:00:59] Selfie ANA RIO GALLEGOS 2023 Venta: a listo buenisimo-!!!
[23/7/23, 11:01:02] Nicolas 🤳 Selfie Mirror: te paso todo igual por las dudas
[23/7/23, 11:01:07] Nicolas 🤳 Selfie Mirror: pero tengo cuenta corriente con ellos
[23/7/23, 11:01:11] Selfie ANA RIO GALLEGOS 2023 Venta: dale dale! mañana los voy a hablar
‎[23/7/23, 11:04:09] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[23/7/23, 11:05:22] Nicolas 🤳 Selfie Mirror: Nicolas Ezequiel Luna  Cuil 23361452879 Dirección Av De Mayo 1624 - Ramos Mejia Buenos Aires ‎<Se editó este mensaje.>
[26/7/23, 13:20:15] Nicolas 🤳 Selfie Mirror: hola
[26/7/23, 13:25:33] Selfie ANA RIO GALLEGOS 2023 Venta: como andas
[27/7/23, 22:55:33] Nicolas 🤳 Selfie Mirror: ‎Eliminaste este mensaje.
[27/7/23, 22:55:41] Nicolas 🤳 Selfie Mirror: ‎Eliminaste este mensaje.
[27/7/23, 22:55:51] Nicolas 🤳 Selfie Mirror: Perdón
[29/7/23, 09:09:49] Selfie ANA RIO GALLEGOS 2023 Venta: HOLA BUEN DIA COMO ESTAS
[29/7/23, 10:55:55] Nicolas 🤳 Selfie Mirror: Hola buen día
[29/7/23, 10:56:15] Selfie ANA RIO GALLEGOS 2023 Venta: como andas!
sabes q hable con las impresoras y esta de vacas la semana q viene vuelve
[29/7/23, 10:56:18] Selfie ANA RIO GALLEGOS 2023 Venta: y ahi coordino
[29/7/23, 10:56:44] Nicolas 🤳 Selfie Mirror: Bueno
[29/7/23, 19:38:58] Nicolas 🤳 Selfie Mirror: Hola Ana
[29/7/23, 19:54:42] Selfie ANA RIO GALLEGOS 2023 Venta: Hola
[29/7/23, 19:57:12] Nicolas 🤳 Selfie Mirror: Como estas
[29/7/23, 19:57:19] Nicolas 🤳 Selfie Mirror: ahí le mande mensaje a otro de disglas
[29/7/23, 19:57:23] Nicolas 🤳 Selfie Mirror: te lo paso
‎[29/7/23, 19:57:36] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[29/7/23, 19:59:01] Selfie ANA RIO GALLEGOS 2023 Venta: Buenísimo dale
! El lunes lo contactó entonces
[2/8/23, 10:05:44] Nicolas 🤳 Selfie Mirror: Hola Ana
[2/8/23, 10:05:45] Nicolas 🤳 Selfie Mirror: buen dia
[2/8/23, 10:08:03] Selfie ANA RIO GALLEGOS 2023 Venta: Como andas !?
[2/8/23, 10:08:40] Nicolas 🤳 Selfie Mirror: Bien y Vos
[2/8/23, 10:10:44] Selfie ANA RIO GALLEGOS 2023 Venta: Todo bien tranqui
[2/8/23, 10:10:52] Selfie ANA RIO GALLEGOS 2023 Venta: Ahí Justo estoy hablando c los chicos de las impresoras
[2/8/23, 10:11:24] Nicolas 🤳 Selfie Mirror: Genial eso te iba a preguntar, y ya lo tengo el espejo
[2/8/23, 10:11:41] Nicolas 🤳 Selfie Mirror: mañana lo terminamos. Falta poner el vidrio nomas
[2/8/23, 10:12:47] Selfie ANA RIO GALLEGOS 2023 Venta: Dale ahí Justo estoy coordinando con ellso y te aviso!
[2/8/23, 10:13:04] Nicolas 🤳 Selfie Mirror: Dale genial, y el tema del despacho necesito saber
[2/8/23, 10:13:08] Nicolas 🤳 Selfie Mirror: si es todos los dias
[2/8/23, 10:13:36] Nicolas 🤳 Selfie Mirror: que dia salen, preferentemente si se puede saber asi lo despachamos cerca del dia y no esta dando vueltas en el deposito
‎[2/8/23, 10:15:31] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[2/8/23, 10:16:10] Nicolas 🤳 Selfie Mirror: Perfecto
[2/8/23, 10:16:28] Nicolas 🤳 Selfie Mirror: Bueno perfecto, llega la impresora y despachamos
[2/8/23, 10:16:38] Nicolas 🤳 Selfie Mirror: Contame que te dicen
[2/8/23, 10:16:58] Nicolas 🤳 Selfie Mirror: los repartos si mal no recuerdo los hacen los martes
‎[2/8/23, 10:20:26] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[2/8/23, 10:21:43] Nicolas 🤳 Selfie Mirror: perfecto
‎[3/8/23, 12:11:46] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[3/8/23, 12:25:48] Selfie ANA RIO GALLEGOS 2023 Venta: BUENISIMOOOOOOO
[3/8/23, 12:26:04] Selfie ANA RIO GALLEGOS 2023 Venta: Eva Perón 2082 entre av, Burgos y chile   morón
Transporte franco Nico
‎[3/8/23, 12:26:16] Selfie ANA RIO GALLEGOS 2023 Venta: ‎Tarjeta de contacto omitida
[3/8/23, 12:26:38] Selfie ANA RIO GALLEGOS 2023 Venta: Decime a nombre de quien va, osea quien lo despacha! asi le aviso al del tranporte que espere ese proveedir
[3/8/23, 12:26:41] Selfie ANA RIO GALLEGOS 2023 Venta: proveedor
‎[3/8/23, 12:38:46] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[3/8/23, 12:51:54] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
‎[3/8/23, 12:56:09] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[3/8/23, 13:00:14] Selfie ANA RIO GALLEGOS 2023 Venta: avisame para avisarle enonces q no esperen!
‎[3/8/23, 13:10:20] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[3/8/23, 13:12:59] Selfie ANA RIO GALLEGOS 2023 Venta: Dale dale
‎[3/8/23, 16:27:50] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[3/8/23, 16:29:55] Selfie ANA RIO GALLEGOS 2023 Venta: Dalee daleee tranqui yo aviso
‎[3/8/23, 16:30:12] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[3/8/23, 16:30:28] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[3/8/23, 16:30:39] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[3/8/23, 17:14:53] Nicolas 🤳 Selfie Mirror: tenes un mail
[3/8/23, 17:21:13] Selfie ANA RIO GALLEGOS 2023 Venta: Anar@fabripac.com.ar
[3/8/23, 17:29:23] Nicolas 🤳 Selfie Mirror: Usuario riogallegos
Clave anariogall
[3/8/23, 17:29:45] Selfie ANA RIO GALLEGOS 2023 Venta: rio grande es!! ajjjajaja igual no impofga es llo mismo
[3/8/23, 17:29:52] Nicolas 🤳 Selfie Mirror: perdon
[3/8/23, 17:29:53] Nicolas 🤳 Selfie Mirror: rio grande
[3/8/23, 17:29:55] Nicolas 🤳 Selfie Mirror: jaajjaja
[3/8/23, 17:30:01] Selfie ANA RIO GALLEGOS 2023 Venta: jajajajajaja
[3/8/23, 17:30:47] Nicolas 🤳 Selfie Mirror: ajajj el sitio esta bien
[3/8/23, 17:30:51] Nicolas 🤳 Selfie Mirror: ahí modifico el usuario
[3/8/23, 17:31:07] Nicolas 🤳 Selfie Mirror: https://selfiemirror.com.ar/riogrande
‎[3/8/23, 17:33:55] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
‎[3/8/23, 17:34:05] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[3/8/23, 17:34:22] Nicolas 🤳 Selfie Mirror: Nono
[3/8/23, 17:34:28] Nicolas 🤳 Selfie Mirror: Es un espacio en internet
[3/8/23, 17:34:35] Selfie ANA RIO GALLEGOS 2023 Venta: ah
[3/8/23, 17:34:38] Nicolas 🤳 Selfie Mirror: Para q lo edites a tu gusto
[3/8/23, 17:34:38] Selfie ANA RIO GALLEGOS 2023 Venta: jajajaja
[3/8/23, 17:34:52] Nicolas 🤳 Selfie Mirror: Ahora te cargo una plantilla base
[3/8/23, 17:35:00] Nicolas 🤳 Selfie Mirror: Después le modificas lo que quieras
[3/8/23, 17:35:03] Nicolas 🤳 Selfie Mirror: Ahora te explico
[3/8/23, 17:35:15] Nicolas 🤳 Selfie Mirror: Te sirve para subir fotos
[3/8/23, 17:35:18] Nicolas 🤳 Selfie Mirror: Y esas cosas
[3/8/23, 17:36:30] Selfie ANA RIO GALLEGOS 2023 Venta: dale tranqui! igual cuando llegue y lo empiece a usar ahi te voy a empezar a taladrar a mensajes
[3/8/23, 17:56:25] Nicolas 🤳 Selfie Mirror: https://selfiemirror.com.ar/riogrande/
[3/8/23, 17:56:30] Nicolas 🤳 Selfie Mirror: ahi lo modifique un poco
[3/8/23, 17:56:35] Nicolas 🤳 Selfie Mirror: pero tenes un editor inmenso
[3/8/23, 17:57:44] Nicolas 🤳 Selfie Mirror: https://selfiemirror.com.ar/wp-admin ‎<Se editó este mensaje.>
[3/8/23, 17:57:54] Nicolas 🤳 Selfie Mirror: ese es el ingreso al editor
[3/8/23, 17:58:07] Nicolas 🤳 Selfie Mirror: y el usuario riogrande
[3/8/23, 17:58:34] Nicolas 🤳 Selfie Mirror: clave riogranana
[4/8/23, 12:25:53] Nicolas 🤳 Selfie Mirror: Hola Ana buen día.
[4/8/23, 12:26:12] Nicolas 🤳 Selfie Mirror: Por la tardecita me estoy acercando a despachar
[4/8/23, 12:26:31] Nicolas 🤳 Selfie Mirror: Hasta q hora están?
[4/8/23, 12:27:00] Selfie ANA RIO GALLEGOS 2023 Venta: hOLA bUEN DIA!!!
[4/8/23, 12:27:05] Selfie ANA RIO GALLEGOS 2023 Venta: Hasta las 17 si no me equivoco
[4/8/23, 12:27:07] Selfie ANA RIO GALLEGOS 2023 Venta: ya te confirmo
[4/8/23, 12:27:23] Nicolas 🤳 Selfie Mirror: Dale y te voy a pedir el comprobante del saldo
[4/8/23, 12:27:34] Nicolas 🤳 Selfie Mirror: Y si lleva remito
[4/8/23, 12:27:54] Selfie ANA RIO GALLEGOS 2023 Venta: siii lleva remito x fa!!
[4/8/23, 12:27:57] Selfie ANA RIO GALLEGOS 2023 Venta: y recordame el saldooo y la crta
[4/8/23, 12:27:59] Selfie ANA RIO GALLEGOS 2023 Venta: q ya te trasnfeiro
[4/8/23, 12:28:02] Nicolas 🤳 Selfie Mirror: Oki
[4/8/23, 12:28:05] Selfie ANA RIO GALLEGOS 2023 Venta: jajaja
[4/8/23, 12:28:05] Selfie ANA RIO GALLEGOS 2023 Venta: me habia colgado
[4/8/23, 12:28:06] Nicolas 🤳 Selfie Mirror: Necesito los datos
[4/8/23, 12:28:06] Selfie ANA RIO GALLEGOS 2023 Venta: ajjajajaja
[4/8/23, 12:28:09] Nicolas 🤳 Selfie Mirror: Del remoto
[4/8/23, 12:28:12] Nicolas 🤳 Selfie Mirror: Remito
[4/8/23, 12:28:20] Nicolas 🤳 Selfie Mirror: 540.000 quedaban
‎[4/8/23, 12:28:44] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[4/8/23, 12:28:44] Nicolas 🤳 Selfie Mirror: Natalia Romina FERNANDEZ
[4/8/23, 12:34:25] Selfie ANA RIO GALLEGOS 2023 Venta: LISTOOOO!!!!
‎[4/8/23, 12:35:23] Selfie ANA RIO GALLEGOS 2023 Venta: espejo 2.pdf • ‎1 página ‎documento omitido
[4/8/23, 12:45:04] Nicolas 🤳 Selfie Mirror: Perfecto
[4/8/23, 12:45:05] Nicolas 🤳 Selfie Mirror: Gracias
[4/8/23, 12:47:47] Nicolas 🤳 Selfie Mirror: Los datos del remito no te olvides
[4/8/23, 12:48:45] Selfie ANA RIO GALLEGOS 2023 Venta: Envialo a nombre de
FABRIPAC SRL CUIT: 30-67066050-4
THOMAS BRIDGE 3411 
RIO GRANDE
TIERRA DEL FEUGO CP:9420
‎[4/8/23, 13:53:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[4/8/23, 13:53:59] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[4/8/23, 13:54:33] Selfie ANA RIO GALLEGOS 2023 Venta: 😍
[4/8/23, 13:55:33] Nicolas 🤳 Selfie Mirror: Columnas alfombra iluminador y control remoto va ahí adentro
‎[4/8/23, 16:51:22] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[5/8/23, 08:24:24] Nicolas 🤳 Selfie Mirror: Hola ana buen día
[5/8/23, 08:24:27] Nicolas 🤳 Selfie Mirror: Están hoy?

Ahí están averiguando si están hoy en el
Depo
[5/8/23, 08:57:52] Nicolas 🤳 Selfie Mirror: Genial
[5/8/23, 08:58:06] Nicolas 🤳 Selfie Mirror: La tapa le falta ahí
[5/8/23, 08:58:24] Nicolas 🤳 Selfie Mirror: Ya lo tengo embalado
[5/8/23, 08:58:33] Nicolas 🤳 Selfie Mirror: Va la tapa y el marco va aparte
[5/8/23, 08:58:35] Nicolas 🤳 Selfie Mirror: Se saca la tapa

[5/8/23, 09:00:05] Nicolas 🤳 Selfie Mirror: 🤔
[5/8/23, 09:05:47] Selfie ANA RIO GALLEGOS 2023 Venta: Siiii Jajajaja
[5/8/23, 09:05:50] Selfie ANA RIO GALLEGOS 2023 Venta: Entendí
[5/8/23, 09:05:52] Selfie ANA RIO GALLEGOS 2023 Venta: Jajajaja
[5/8/23, 09:06:08] Nicolas 🤳 Selfie Mirror: 😅
[5/8/23, 09:24:02] Selfie ANA RIO GALLEGOS 2023 Venta: Ahí me dice el chico del depo q va a estar en 1 hora y media! Hasta las 2!
[5/8/23, 09:24:09] Selfie ANA RIO GALLEGOS 2023 Venta: Confírmame si lo llevas así le digo q ge espere
[5/8/23, 09:27:05] Nicolas 🤳 Selfie Mirror: Sisi lo llevo
[5/8/23, 09:27:16] Nicolas 🤳 Selfie Mirror: De 11 a 14 está?
[5/8/23, 09:30:41] Selfie ANA RIO GALLEGOS 2023 Venta: Siii
[5/8/23, 09:30:58] Nicolas 🤳 Selfie Mirror: Joya
[5/8/23, 13:24:52] Nicolas 🤳 Selfie Mirror: Le podes avisar que estoy en viaje?
[5/8/23, 13:25:06] Nicolas 🤳 Selfie Mirror: Llego unos minutos antes de las 14
[5/8/23, 13:25:21] Selfie ANA RIO GALLEGOS 2023 Venta: Te paso su celu así lo llamas
[5/8/23, 13:25:25] Selfie ANA RIO GALLEGOS 2023 Venta: A ver q no se haya ido ya
‎[5/8/23, 13:25:33] Selfie ANA RIO GALLEGOS 2023 Venta: ‎Tarjeta de contacto omitida
[5/8/23, 13:25:41] Selfie ANA RIO GALLEGOS 2023 Venta: Xq estoy en una reunión no puedo llamarlo
[5/8/23, 13:25:47] Nicolas 🤳 Selfie Mirror: Dale
[5/8/23, 13:29:07] Nicolas 🤳 Selfie Mirror: No me contesta
[5/8/23, 13:29:53] Selfie ANA RIO GALLEGOS 2023 Venta: Ahí le mande mensaje ! Espero lo vea antes de irse
[5/8/23, 13:58:00] Nicolas 🤳 Selfie Mirror: Despachado ✅
[5/8/23, 13:58:14] Selfie ANA RIO GALLEGOS 2023 Venta: Geniooooooo
[5/8/23, 13:58:22] Selfie ANA RIO GALLEGOS 2023 Venta: Te aviso cuando lo tenga x cualquie duda
[

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
