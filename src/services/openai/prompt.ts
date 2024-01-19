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
[8/10/23, 18:21:11] Gaston - Venta 16-10-23: Como para ver si me alcanza
[8/10/23, 18:21:15] Nicolas 🤳 Selfie Mirror: Te paso el contacto de Kodak
[8/10/23, 18:21:18] Gaston - Venta 16-10-23: La busco en MercadoLibre
[8/10/23, 18:21:21] Nicolas 🤳 Selfie Mirror: Eso lo podes pagar con tarjeta
[8/10/23, 18:21:25] Nicolas 🤳 Selfie Mirror: Claro
[8/10/23, 18:21:44] Nicolas 🤳 Selfie Mirror: Pero capas directamente al distribuidor te hacen un descuento
[8/10/23, 18:22:00] Nicolas 🤳 Selfie Mirror: Se llama disglas el distribuidor
[8/10/23, 18:22:02] Gaston - Venta 16-10-23: Claro
[8/10/23, 18:22:07] Nicolas 🤳 Selfie Mirror: Ahí te mando la impresora
‎[8/10/23, 18:23:07] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:23:37] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[8/10/23, 18:24:09] Nicolas 🤳 Selfie Mirror: Decile q vas de parte nuestra seguro te hacen una atención
[8/10/23, 18:24:49] Gaston - Venta 16-10-23: Selfie mirror le digo?
‎[8/10/23, 18:25:34] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:35] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:35] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:35] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:36] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:36] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:37] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:37] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:38] Nicolas 🤳 Selfie Mirror: ‎Video omitido
‎[8/10/23, 18:25:38] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:25:39] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[8/10/23, 18:25:44] Nicolas 🤳 Selfie Mirror: Esa es
[8/10/23, 18:25:50] Nicolas 🤳 Selfie Mirror: Sisi nico de selfie Mirror
[8/10/23, 18:27:51] Gaston - Venta 16-10-23: Y en avión lo podré traer?
[8/10/23, 18:28:00] Gaston - Venta 16-10-23: O sino lo mando por encomienda
[8/10/23, 18:28:18] Nicolas 🤳 Selfie Mirror: Mira, la semana pasada se llevaron uno por avianca
[8/10/23, 18:28:21] Nicolas 🤳 Selfie Mirror: A Colombia
[8/10/23, 18:29:44] Gaston - Venta 16-10-23: Ahí ví la impresora en ml, con 640 copias sin cargo
[8/10/23, 18:29:50] Gaston - Venta 16-10-23: Más o menos por fiesta cuántas se usan?
[8/10/23, 18:30:00] Gaston - Venta 16-10-23: Para ver cada cuánto tengo que reponer los insumos
‎[8/10/23, 18:30:44] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[8/10/23, 18:30:57] Nicolas 🤳 Selfie Mirror: Eso es de agua va
[8/10/23, 18:31:01] Nicolas 🤳 Selfie Mirror: Avisnca
[8/10/23, 18:31:05] Nicolas 🤳 Selfie Mirror: Y fue sin problemas
[8/10/23, 18:31:23] Gaston - Venta 16-10-23: Si como equipaje especial en aerolíneas va
[8/10/23, 18:31:34] Gaston - Venta 16-10-23: Si van con esquíes a Bariloche que es algo mucho más grande
[8/10/23, 18:31:38] Nicolas 🤳 Selfie Mirror: Sacas 40 fotos por evento
[8/10/23, 18:32:05] Nicolas 🤳 Selfie Mirror: Entre 12 y 15 eventos
[8/10/23, 18:32:11] Nicolas 🤳 Selfie Mirror: Depende q medida entregues
[8/10/23, 18:32:25] Nicolas 🤳 Selfie Mirror: Pero lo más común es 5x15 con esta impresora
[8/10/23, 18:32:30] Nicolas 🤳 Selfie Mirror: Que las corta
[8/10/23, 18:32:56] Nicolas 🤳 Selfie Mirror: Podes poner la impresora q quieras pero las vas a tener q cortar a mano
[8/10/23, 18:33:42] Nicolas 🤳 Selfie Mirror: Con las Epson, fuji
[8/10/23, 18:33:50] Nicolas 🤳 Selfie Mirror: Esas usan hojas
[8/10/23, 18:33:54] Nicolas 🤳 Selfie Mirror: No bobina
[8/10/23, 18:33:58] Nicolas 🤳 Selfie Mirror: Y no cortan
[8/10/23, 18:34:59] Gaston - Venta 16-10-23: La kodak me interesa
[8/10/23, 18:35:08] Gaston - Venta 16-10-23: Ahí le escribí cuando me conteste te digo
[8/10/23, 18:35:23] Nicolas 🤳 Selfie Mirror: Este es el gerente de ventas
‎[8/10/23, 18:35:46] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[8/10/23, 18:35:46] Gaston - Venta 16-10-23: Algún descuentito si te pago dólar billete?
[8/10/23, 18:35:59] Nicolas 🤳 Selfie Mirror: El precio es en dólar billete
[8/10/23, 18:36:18] Nicolas 🤳 Selfie Mirror: Te puedo dar algo
[8/10/23, 18:36:21] Nicolas 🤳 Selfie Mirror: Una alfombra
[8/10/23, 18:36:39] Nicolas 🤳 Selfie Mirror: Pero bajar está difícil
[8/10/23, 18:37:01] Gaston - Venta 16-10-23: Yo si saco pasaje para martes
[8/10/23, 18:37:06] Gaston - Venta 16-10-23: Podría ir el miércoles por el local
[8/10/23, 18:37:18] Nicolas 🤳 Selfie Mirror: Dale
[8/10/23, 18:37:22] Nicolas 🤳 Selfie Mirror: Genial
[8/10/23, 18:37:31] Gaston - Venta 16-10-23: El tema es que el otro martes ya tendría que estar volviendo
[8/10/23, 18:37:46] Nicolas 🤳 Selfie Mirror: Mira tengo que entregar uno mañana
[8/10/23, 18:37:57] Nicolas 🤳 Selfie Mirror: Y tengo uno que está con el cajón armado
[8/10/23, 18:38:08] Nicolas 🤳 Selfie Mirror: Qué es para el otro miércoles
[8/10/23, 18:38:15] Nicolas 🤳 Selfie Mirror: Pero llego a meterlo y armar otro
[8/10/23, 18:38:18] Gaston - Venta 16-10-23: Los Marcos vienen de distintos modelos?
[8/10/23, 18:38:32] Nicolas 🤳 Selfie Mirror: Capas para el viernes lo tendrías si te convence
[8/10/23, 18:38:51] Gaston - Venta 16-10-23: Ah sí, yo por el tema que el vuelo de vuelta lo tengo que sacar junto con el de ida
[8/10/23, 18:38:54] Nicolas 🤳 Selfie Mirror: Si
‎[8/10/23, 18:39:48] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:49] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:49] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:52] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:52] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:53] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:53] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:54] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:55] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[8/10/23, 18:39:55] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[8/10/23, 18:40:02] Nicolas 🤳 Selfie Mirror: Perdón por tantas fotos
[8/10/23, 18:40:06] Nicolas 🤳 Selfie Mirror: 🙄
[8/10/23, 18:41:07] Gaston - Venta 16-10-23: El de los focos está bueno
[8/10/23, 18:41:14] Gaston - Venta 16-10-23: Cómo un espejo de maquilladora
[8/10/23, 18:41:26] Nicolas 🤳 Selfie Mirror: Ese lo tengo en stock
‎[8/10/23, 18:42:20] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[8/10/23, 19:38:14] Gaston - Venta 16-10-23: También se puede firmar en el espejo y eso sale en la foto?
[8/10/23, 19:38:34] Gaston - Venta 16-10-23: Ahí le pregunté a mi mejor amigo que vive en Caba si estará así tenga donde quedarme jaja
[8/10/23, 19:38:44] Gaston - Venta 16-10-23: Si me da el ok saco los vuelos y te estoy avisando
[8/10/23, 19:46:11] Nicolas 🤳 Selfie Mirror: Sisi
[8/10/23, 19:47:21] Nicolas 🤳 Selfie Mirror: Avísame para cuando los Tenes así acomodo todo
‎[8/10/23, 19:49:34] Nicolas 🤳 Selfie Mirror: ‎Video omitido
‎[8/10/23, 19:51:25] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[8/10/23, 19:51:39] Nicolas 🤳 Selfie Mirror: Taller
[8/10/23, 22:47:47] Gaston - Venta 16-10-23: Ya saque los vuelos
[8/10/23, 22:47:56] Gaston - Venta 16-10-23: Así que el miércoles estoy por ahí
[8/10/23, 22:49:51] Nicolas 🤳 Selfie Mirror: Genial
[8/10/23, 22:51:18] Gaston - Venta 16-10-23: Que medidas tiene y cuánto pesa?
[8/10/23, 22:51:25] Gaston - Venta 16-10-23: Saque equipaje especial para la vuelta
[8/10/23, 22:57:04] Nicolas 🤳 Selfie Mirror: 45kg
[8/10/23, 22:57:24] Nicolas 🤳 Selfie Mirror: ☝️
[8/10/23, 22:57:43] Gaston - Venta 16-10-23: Ah bien
[8/10/23, 22:57:52] Gaston - Venta 16-10-23: Con equipaje especial entra bien en el avión
[8/10/23, 22:57:59] Nicolas 🤳 Selfie Mirror: Sisi
[11/10/23, 11:25:45] Gaston - Venta 16-10-23: Hola cómo va?
[11/10/23, 13:54:10] Gaston - Venta 16-10-23: Estás?
[11/10/23, 13:54:17] Gaston - Venta 16-10-23: Ya estoy en bs as
[11/10/23, 20:15:44] Nicolas 🤳 Selfie Mirror: Hola
[11/10/23, 20:15:48] Nicolas 🤳 Selfie Mirror: Buenas tardes
[11/10/23, 20:16:09] Gaston - Venta 16-10-23: Hola
[11/10/23, 20:16:17] Gaston - Venta 16-10-23: Te escribi hoy para ir al local
[11/10/23, 20:16:42] Nicolas 🤳 Selfie Mirror: Si perdón tuve un problema con la línea
[11/10/23, 20:17:00] Gaston - Venta 16-10-23: Mañana en qué horario estarás?
[11/10/23, 20:17:10] Gaston - Venta 16-10-23: Así veo los espejos
‎[11/10/23, 20:17:18] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[11/10/23, 20:17:52] Nicolas 🤳 Selfie Mirror: No sé porq aparece todo así
[11/10/23, 20:17:59] Nicolas 🤳 Selfie Mirror: 🤷‍♂️
[11/10/23, 20:18:04] Nicolas 🤳 Selfie Mirror: Todo el día
[11/10/23, 20:18:31] Gaston - Venta 16-10-23: Oka y consulte al distribuidor de la impresora que me dijiste
[11/10/23, 20:18:39] Gaston - Venta 16-10-23: Y me cobra lo mismo que comprando por MercadoLibre
[11/10/23, 20:18:40] Nicolas 🤳 Selfie Mirror: Si
[11/10/23, 20:18:47] Gaston - Venta 16-10-23: No me hace ningún descuento
[11/10/23, 20:19:04] Gaston - Venta 16-10-23: Desp Vi la impresora usadas pero no sé si es buena opción
[11/10/23, 20:19:34] Nicolas 🤳 Selfie Mirror: Mira yo las tengo hace muchos años
[11/10/23, 20:20:14] Gaston - Venta 16-10-23: Mañana como al mediodia voy
[11/10/23, 20:20:19] Gaston - Venta 16-10-23: Te escribo antes de ir
[11/10/23, 20:20:21] Nicolas 🤳 Selfie Mirror: Okis
[11/10/23, 20:20:22] Nicolas 🤳 Selfie Mirror: Dale
[11/10/23, 20:20:31] Gaston - Venta 16-10-23: Av de mayo 1600?
[11/10/23, 20:20:42] Nicolas 🤳 Selfie Mirror: Si 1624
[12/10/23, 10:50:42] Gaston - Venta 16-10-23: Hola
[12/10/23, 10:50:45] Gaston - Venta 16-10-23: Voy yendo
[12/10/23, 10:55:57] Nicolas 🤳 Selfie Mirror: Olí
[12/10/23, 10:56:00] Nicolas 🤳 Selfie Mirror: Oki te espero
[12/10/23, 11:41:17] Gaston - Venta 16-10-23: Estoy afuera
[12/10/23, 11:41:35] Nicolas 🤳 Selfie Mirror: Voy
[12/10/23, 22:55:10] Nicolas 🤳 Selfie Mirror: Pásame los datos cuando puedas
[12/10/23, 22:55:29] Nicolas 🤳 Selfie Mirror: Así hago la nota de garantía y la carpetita
[12/10/23, 22:56:41] Gaston - Venta 16-10-23: Dale que datos necesitas?
[12/10/23, 22:56:57] Gaston - Venta 16-10-23: No me hagas factura igual
[13/10/23, 00:18:44] Nicolas 🤳 Selfie Mirror: papel de gartantia y carpetita como la que te mostra
[13/10/23, 00:18:58] Nicolas 🤳 Selfie Mirror: dni nombre, y si ya sabes los del envio asi los cargo
[13/10/23, 00:26:36] Gaston - Venta 16-10-23: Mathias tartalo 35517871
‎[14/10/23, 15:08:03] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[14/10/23, 15:08:07] Nicolas 🤳 Selfie Mirror: Ya tamos
[14/10/23, 15:08:12] Nicolas 🤳 Selfie Mirror: ☝️☝️
‎[14/10/23, 15:09:04] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[14/10/23, 15:11:12] Gaston - Venta 16-10-23: Hola Nico
[14/10/23, 15:11:43] Gaston - Venta 16-10-23: Ahora tipo 4 podés?
‎[14/10/23, 15:12:21] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[14/10/23, 15:12:36] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[14/10/23, 15:12:42] Gaston - Venta 16-10-23: Dale dale a la noche sino
[14/10/23, 15:13:20] Gaston - Venta 16-10-23: Yo estoy por salir y te aviso cuando vuelva
[14/10/23, 15:13:25] Gaston - Venta 16-10-23: A la noche entonces
[14/10/23, 19:36:03] Gaston - Venta 16-10-23: Hola Nico
[14/10/23, 19:36:06] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! 
Horario comercial L - V 10 a 17hs
[14/10/23, 19:36:06] Gaston - Venta 16-10-23: Ya estoy
[14/10/23, 19:48:59] Nicolas 🤳 Selfie Mirror: Hola cómo va
[14/10/23, 19:49:05] Nicolas 🤳 Selfie Mirror: Te lo entrego mañana
[14/10/23, 19:49:52] Nicolas 🤳 Selfie Mirror: Te parece ?
[14/10/23, 19:49:56] Nicolas 🤳 Selfie Mirror: Así lo configuro bien
[14/10/23, 19:50:00] Gaston - Venta 16-10-23: Hola bueno dale
[14/10/23, 19:50:11] Gaston - Venta 16-10-23: Yo mañana estoy hasta las 11:30 AM
[14/10/23, 19:50:21] Gaston - Venta 16-10-23: Y vuelvo como a las 7 8 de la noche
[14/10/23, 19:50:35] Nicolas 🤳 Selfie Mirror: Oki a la noche te lo llevo seguro
[14/10/23, 19:50:44] Gaston - Venta 16-10-23: Oka
[15/10/23, 17:38:07] Nicolas 🤳 Selfie Mirror: Hola
[15/10/23, 17:39:32] Gaston - Venta 16-10-23: Hola Nico
[15/10/23, 17:39:35] Gaston - Venta 16-10-23: Cómo va?
[15/10/23, 17:39:40] Nicolas 🤳 Selfie Mirror: Bien vos
[15/10/23, 17:40:02] Gaston - Venta 16-10-23: Bien, ya estoy volviendo al departamento
[15/10/23, 17:40:09] Gaston - Venta 16-10-23: A qué hora querés pasar?
[15/10/23, 17:40:59] Nicolas 🤳 Selfie Mirror: Preparo todo y te aviso que es
[15/10/23, 17:41:04] Nicolas 🤳 Selfie Mirror: En cuanto llegaras?
[15/10/23, 17:41:16] Gaston - Venta 16-10-23: En media hora estoy
[15/10/23, 17:41:21] Nicolas 🤳 Selfie Mirror: Oki
[15/10/23, 17:41:36] Gaston - Venta 16-10-23: En una hora calculas que estás?
[15/10/23, 17:41:43] Nicolas 🤳 Selfie Mirror: Un poco más
[15/10/23, 17:41:51] Nicolas 🤳 Selfie Mirror: Te aviso cuando salgo
[15/10/23, 17:41:58] Gaston - Venta 16-10-23: Oka
[15/10/23, 17:42:10] Gaston - Venta 16-10-23: Valdenegro 3379 villa Urquiza
[15/10/23, 17:43:25] Gaston - Venta 16-10-23: Me instalas el programa en la notebook también?
[15/10/23, 17:43:42] Nicolas 🤳 Selfie Mirror: Sisi
[15/10/23, 20:33:59] Gaston - Venta 16-10-23: Venís?
‎[15/10/23, 20:34:20] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[15/10/23, 20:34:33] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[15/10/23, 20:34:44] Gaston - Venta 16-10-23: Oka
[15/10/23, 20:35:08] Gaston - Venta 16-10-23: ‎Ubicación: https://maps.google.com/?q=-34.563721,-58.488297
[15/10/23, 21:55:06] Gaston - Venta 16-10-23: ‎Llamada perdida
[15/10/23, 21:59:20] Nicolas 🤳 Selfie Mirror: Yendo
‎[15/10/23, 22:21:34] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[15/10/23, 22:33:18] Gaston - Venta 16-10-23: Ok avísame y bajo
[15/10/23, 22:33:29] Gaston - Venta 16-10-23: Es un edificio de 3 pisos
‎[15/10/23, 22:33:38] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[15/10/23, 22:33:53] Gaston - Venta 16-10-23: El primero de la cuadra, a mano derecha
[15/10/23, 23:18:30] Gaston - Venta 16-10-23: San Lorenzo 1453 
San Rafael, Mendoza
Código postal 5600
Recibe Liliana elizabeth Gómez
[15/10/23, 23:18:38] Nicolas 🤳 Selfie Mirror: https://youtube.com/playlist?list=PLdP5sEqPie6VmNQQ5GR0kxogieHWNm3k0&si=vWqrsJWDV1qlZVvw
[16/10/23, 13:39:27] Gaston - Venta 16-10-23: Hola Nico
[16/10/23, 13:39:42] Gaston - Venta 16-10-23: Me olvidé de decirte que me dejes la carpeta que me comentabas
[16/10/23, 13:39:59] Gaston - Venta 16-10-23: Esa la podía llevar
‎[16/10/23, 13:40:22] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[16/10/23, 13:40:44] Gaston - Venta 16-10-23: Dale envíamela con las cosas
[16/10/23, 13:40:50] Gaston - Venta 16-10-23: Así la tengo impresa
[16/10/23, 13:44:50] Gaston - Venta 16-10-23: Desp si pásame algunas fotos y videos para armar una publicación
[16/10/23, 13:44:55] Gaston - Venta 16-10-23: Para promocionarlo
[16/10/23, 18:15:33] Gaston - Venta 16-10-23: Menos mal que me fijé en la mesa
[16/10/23, 18:15:40] Gaston - Venta 16-10-23: Había quedado el control remoto del espejo
[16/10/23, 18:15:58] Nicolas 🤳 Selfie Mirror: Mmmm
‎[16/10/23, 18:15:59] Gaston - Venta 16-10-23: ‎imagen omitida
[16/10/23, 18:16:06] Gaston - Venta 16-10-23: Este es no?
[16/10/23, 18:16:07] Nicolas 🤳 Selfie Mirror: Aa tengo otro
[16/10/23, 18:16:09] Nicolas 🤳 Selfie Mirror: Sisi
[17/10/23, 12:27:32] Gaston - Venta 16-10-23: Hola Nico como va?
[17/10/23, 12:27:45] Gaston - Venta 16-10-23: Avísame cuando me lo despaches
[17/10/23, 16:27:41] Nicolas 🤳 Selfie Mirror: Hola
[17/10/23, 16:27:45] Nicolas 🤳 Selfie Mirror: Recién vuelvo de ahí
[17/10/23, 16:27:56] Nicolas 🤳 Selfie Mirror: Por el tamaño me mandaron a la central de Liniers
[17/10/23, 16:28:28] Gaston - Venta 16-10-23: O sino por oca, por cual es el que haces los envíos normalmente?
[17/10/23, 16:28:36] Nicolas 🤳 Selfie Mirror: Y me dijeron que vidrio no se puede
[17/10/23, 16:28:46] Nicolas 🤳 Selfie Mirror: Así que tengo q hacer el remito sin que diga mirror
[17/10/23, 16:29:11] Nicolas 🤳 Selfie Mirror: Vía cargo
[17/10/23, 16:29:26] Gaston - Venta 16-10-23: Ya me fijo si está en San Rafael via cargo
[17/10/23, 16:29:52] Gaston - Venta 16-10-23: Si, si está via cargo
[17/10/23, 16:30:06] Nicolas 🤳 Selfie Mirror: Si?
[17/10/23, 16:30:08] Nicolas 🤳 Selfie Mirror: Seguro?
[17/10/23, 16:30:12] Gaston - Venta 16-10-23: Si
[17/10/23, 16:30:24] Nicolas 🤳 Selfie Mirror: Llega en un día vía cargo
[17/10/23, 16:30:26] Nicolas 🤳 Selfie Mirror: A ver si llego
[17/10/23, 16:30:33] Nicolas 🤳 Selfie Mirror: Ahí te digo
[17/10/23, 16:30:40] Nicolas 🤳 Selfie Mirror: Voy una escapada
[17/10/23, 16:31:00] Gaston - Venta 16-10-23: De todas maneras en la oficina cuando digas San Rafael Mendoza te dirán si vamos
[17/10/23, 16:31:08] Gaston - Venta 16-10-23: Pero me fijé en Google y si tienen oficina acá
[17/10/23, 16:31:16] Nicolas 🤳 Selfie Mirror: Van a todo el país
[17/10/23, 16:31:21] Nicolas 🤳 Selfie Mirror: Puerta a puerta
[17/10/23, 16:31:36] Gaston - Venta 16-10-23: A la pampa era el problema, porque es un pueblito donde vivo
[17/10/23, 16:31:43] Gaston - Venta 16-10-23: Acá en San Rafael es ciudad
‎[18/10/23, 07:47:48] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[18/10/23, 11:04:15] Gaston - Venta 16-10-23: Hola Nico como vs
[18/10/23, 11:04:24] Gaston - Venta 16-10-23: Lo pudiste despachar?
‎[18/10/23, 14:07:55] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 14:08:29] Gaston - Venta 16-10-23: Oka
‎[18/10/23, 14:08:46] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 14:08:54] Gaston - Venta 16-10-23: Gral acha  queda lejos de donde vivo y yo estoy en la pampa a partir del 29 de octubre
‎[18/10/23, 14:09:46] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 14:10:46] Gaston - Venta 16-10-23: De dónde vivo alrededores rs
[18/10/23, 14:11:07] Gaston - Venta 16-10-23: Victorica, telen, loventue, carro quemado
‎[18/10/23, 14:11:13] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 14:11:46] Gaston - Venta 16-10-23: Y al principio voy a utilizar el auto de mi suegro para moverme con el espejo, no me puedo alejar tanto
‎[18/10/23, 14:12:43] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 14:24:00] Gaston - Venta 16-10-23: Dale
[18/10/23, 16:55:52] Nicolas 🤳 Selfie Mirror: Dni
[18/10/23, 16:55:56] Nicolas 🤳 Selfie Mirror: De quien recibe
‎[18/10/23, 16:57:03] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[18/10/23, 16:57:05] Gaston - Venta 16-10-23: 12978050
[18/10/23, 16:57:15] Nicolas 🤳 Selfie Mirror: Y teléfono
‎[18/10/23, 16:57:23] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[18/10/23, 16:58:12] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[18/10/23, 16:58:23] Gaston - Venta 16-10-23: El mío
[18/10/23, 16:58:28] Nicolas 🤳 Selfie Mirror: Ok
[18/10/23, 16:58:33] Nicolas 🤳 Selfie Mirror: Le paso el tuyo
[18/10/23, 16:58:28] Gaston - Venta 16-10-23: 2604415626
‎[18/10/23, 17:04:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[18/10/23, 17:05:12] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[18/10/23, 17:10:30] Gaston - Venta 16-10-23: Oka dale
[18/10/23, 17:10:53] Gaston - Venta 16-10-23: ‎Se eliminó este mensaje.
[18/10/23, 17:11:04] Gaston - Venta 16-10-23: ‎Se eliminó este mensaje.
[18/10/23, 17:22:53] Gaston - Venta 16-10-23: Ah sí me envías mañana te paso el de mi vieja, porque yo no voy a estar mañana
[18/10/23, 17:23:34] Gaston - Venta 16-10-23: 0000003100041902570262
[18/10/23, 17:23:42] Gaston - Venta 16-10-23: Liliana elizabeth Gómez MercadoPago
[18/10/23, 17:24:06] Gaston - Venta 16-10-23: Alias
[18/10/23, 17:24:15] Gaston - Venta 16-10-23: amigo.cromo.bando.mp
[19/10/23, 18:33:52] Gaston - Venta 16-10-23: Hola Nico como va? Pudiste enviarle lo del envío a mi vieja?
[19/10/23, 18:44:14] Nicolas 🤳 Selfie Mirror: No sigue todo cerrado
[19/10/23, 18:44:47] Nicolas 🤳 Selfie Mirror: Ahora me fijo de depositar
[19/10/23, 19:02:10] Gaston - Venta 16-10-23: Oka
[20/10/23, 10:55:15] Gaston - Venta 16-10-23: Hola Nico me enviaste lo del envío?
[20/10/23, 10:55:49] Gaston - Venta 16-10-23: Porque ya me figura que está en Mendoza el envío y yo no le dejé plata a mi vieja para que lo reciba
[20/10/23, 10:56:06] Nicolas 🤳 Selfie Mirror: Ahora me ocupo
[20/10/23, 11:13:03] Nicolas 🤳 Selfie Mirror: Todo cerrado
[20/10/23, 11:13:08] Nicolas 🤳 Selfie Mirror: Tengo 11 mil en cuenta
[20/10/23, 11:13:21] Nicolas 🤳 Selfie Mirror: Desde el miércoles estamos así
[20/10/23, 11:13:54] Nicolas 🤳 Selfie Mirror: Los estoy tratando de vender particular pero nadie quiere cambiar
[20/10/23, 11:14:20] Gaston - Venta 16-10-23: Venta si están comprando
[20/10/23, 11:14:27] Gaston - Venta 16-10-23: Lo que no están haciendo es vender generalmente
[20/10/23, 11:14:36] Nicolas 🤳 Selfie Mirror: acá están cerradas
[20/10/23, 11:14:40] Nicolas 🤳 Selfie Mirror: Ahora me voy para el centro
[20/10/23, 11:14:44] Nicolas 🤳 Selfie Mirror: Y trato de cambiarlos ahí
[20/10/23, 11:14:50] Nicolas 🤳 Selfie Mirror: Ahí si tengo q poder
[20/10/23, 11:15:21] Nicolas 🤳 Selfie Mirror: La única abierta, compra al oficial
[20/10/23, 11:15:30] Gaston - Venta 16-10-23: Oka avísame
[20/10/23, 11:15:36] Gaston - Venta 16-10-23: Igual arbolitos en florida hay
[20/10/23, 11:15:38] Nicolas 🤳 Selfie Mirror: Ahí te mando las 11
[20/10/23, 11:15:42] Nicolas 🤳 Selfie Mirror: Sisi
[20/10/23, 11:15:46] Nicolas 🤳 Selfie Mirror: Por eso voy para allá
[20/10/23, 11:15:51] Gaston - Venta 16-10-23: Y en el grupo de compra venta de bs as también muchos quieren compra
[20/10/23, 11:15:58] Nicolas 🤳 Selfie Mirror: Pásame
[20/10/23, 11:15:59] Nicolas 🤳 Selfie Mirror: Lo
[20/10/23, 11:16:10] Nicolas 🤳 Selfie Mirror: De WhatsApp?
[20/10/23, 11:16:24] Gaston - Venta 16-10-23: 0000003100041902570262
[20/10/23, 11:16:24] Gaston - Venta 16-10-23: Liliana elizabeth Gómez MercadoPago
[20/10/23, 11:16:25] Gaston - Venta 16-10-23: Alias
[20/10/23, 11:16:25] Gaston - Venta 16-10-23: amigo.cromo.bando.mp
‎[20/10/23, 11:17:25] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[20/10/23, 11:17:56] Gaston - Venta 16-10-23: Me figura que entró a la planta de Mendoza puede que llegue hoy o mañana el espejo
‎[20/10/23, 14:20:03] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[20/10/23, 14:26:46] Gaston - Venta 16-10-23: Gracias
[25/10/23, 13:30:46] Nicolas 🤳 Selfie Mirror: Hola cómo estás
[25/10/23, 13:30:52] Nicolas 🤳 Selfie Mirror: Hola buenas tardes. Soy María jose
Quería saber si están disponibles para el 9 de diciembre. 
Evento de 15 años.
Somos de bernando Larroude!
[25/10/23, 13:30:58] Nicolas 🤳 Selfie Mirror: Te sirve
[25/10/23, 13:31:25] Gaston - Venta 16-10-23: Hola Nico, ya tengo reservado para esa fecha
[25/10/23, 13:31:33] Nicolas 🤳 Selfie Mirror: Vamosssd!!!!
‎[25/10/23, 13:31:53] Nicolas 🤳 Selfie Mirror: ‎sticker omitido
[25/10/23, 13:32:26] Gaston - Venta 16-10-23: Larroude está lejitos, unos 200 kilómetros de dónde vivo
‎[25/10/23, 13:34:49] Gaston - Venta 16-10-23: ‎imagen omitida
[25/10/23, 13:34:59] Gaston - Venta 16-10-23: Esos pueblos quedan cerca de donde vivo
[25/10/23, 13:57:08] Nicolas 🤳 Selfie Mirror: Oki
[28/10/23, 17:19:15] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! Horario comercial L - V 10 a 17hs
[28/10/23, 17:19:13] Gaston - Venta 16-10-23: Hola Nico podés hablar?
[28/10/23, 17:19:23] Gaston - Venta 16-10-23: Recién estoy configurando el espejo
[28/10/23, 17:23:21] Gaston - Venta 16-10-23: Cuando quiero firmar la foto no hace lo que marco en la pantalla
‎[28/10/23, 17:23:34] Gaston - Venta 16-10-23: ‎imagen omitida
‎[28/10/23, 17:38:35] Gaston - Venta 16-10-23: ‎audio omitido
[28/10/23, 17:56:01] Nicolas 🤳 Selfie Mirror: Hola
[28/10/23, 17:56:37] Nicolas 🤳 Selfie Mirror: Reinícialo
[28/10/23, 17:57:05] Nicolas 🤳 Selfie Mirror: Cuando tenes el evento
[28/10/23, 17:57:18] Gaston - Venta 16-10-23: Está noche
[28/10/23, 17:57:24] Gaston - Venta 16-10-23: Es el familiar que te conté
[28/10/23, 17:57:26] Nicolas 🤳 Selfie Mirror: Ok
[28/10/23, 17:57:35] Gaston - Venta 16-10-23: Lo apagó y lo prendo?
[28/10/23, 17:57:40] Nicolas 🤳 Selfie Mirror: Si
[28/10/23, 17:58:54] Gaston - Venta 16-10-23: Cuando prendo toco en dslrbooth
‎[28/10/23, 18:01:18] Gaston - Venta 16-10-23: ‎audio omitido
‎[28/10/23, 18:01:25] Gaston - Venta 16-10-23: ‎imagen omitida
[28/10/23, 18:20:15] Nicolas 🤳 Selfie Mirror: solo en el programa?
[28/10/23, 18:20:21] Nicolas 🤳 Selfie Mirror: o no anda el táctil en ningún lado
[28/10/23, 18:23:18] Nicolas 🤳 Selfie Mirror: ???
‎[28/10/23, 18:30:16] Gaston - Venta 16-10-23: ‎audio omitido
[28/10/23, 18:32:50] Nicolas 🤳 Selfie Mirror: En la plantilla está el problema
[28/10/23, 18:33:06] Nicolas 🤳 Selfie Mirror: Fíjate que debe estar chiquito el lugarcito para firmar
[28/10/23, 18:33:19] Nicolas 🤳 Selfie Mirror: Mándame una foto de la plantilla
‎[28/10/23, 18:36:40] Gaston - Venta 16-10-23: ‎audio omitido
[28/10/23, 19:33:37] Nicolas 🤳 Selfie Mirror: avisame
‎[30/10/23, 13:47:12] Gaston - Venta 16-10-23: ‎audio omitido
[30/10/23, 21:30:50] Gaston - Venta 16-10-23: ?
[31/10/23, 12:10:02] Gaston - Venta 16-10-23: ‎Llamada perdida
[31/10/23, 12:14:47] Gaston - Venta 16-10-23: Estás tipo 4 o 5 así te llamo y me guías?
[31/10/23, 12:15:02] Gaston - Venta 16-10-23: Porque tienen que venir a la noche unos clientes a verlo funcionando
[31/10/23, 12:15:03] Nicolas 🤳 Selfie Mirror: Hola Gastón
[31/10/23, 12:15:10] Gaston - Venta 16-10-23: Y estoy anclado, no puedo mostrarlo
[31/10/23, 12:15:16] Nicolas 🤳 Selfie Mirror: Perdón estoy llegando de Córdoba a
[31/10/23, 12:15:27] Nicolas 🤳 Selfie Mirror: Llego a la ofi y te llamo
[31/10/23, 12:15:35] Nicolas 🤳 Selfie Mirror: Dame un ratito tipo 3
[31/10/23, 12:15:45] Gaston - Venta 16-10-23: Oka si tipo 4 sino
[31/10/23, 12:15:49] Nicolas 🤳 Selfie Mirror: Joya
[31/10/23, 12:15:52] Gaston - Venta 16-10-23: Así estoy con el espejo y la computadora
[31/10/23, 20:05:18] Gaston - Venta 16-10-23: Podés hablar ahora?
[31/10/23, 20:05:20] Gaston - Venta 16-10-23: Así lo vemos
[31/10/23, 20:05:39] Nicolas 🤳 Selfie Mirror: Sisi
[31/10/23, 20:05:42] Nicolas 🤳 Selfie Mirror: Decime
[31/10/23, 20:05:47] Nicolas 🤳 Selfie Mirror: No estoy en la pc
[31/10/23, 20:06:34] Nicolas 🤳 Selfie Mirror: Pero decime aver si puedo resolverlo
‎[31/10/23, 20:07:42] Gaston - Venta 16-10-23: ‎audio omitido
[1/11/23, 19:40:35] Gaston - Venta 16-10-23: Hola, podés en media hora?
[1/11/23, 19:40:51] Gaston - Venta 16-10-23: Así te llamo y solucionamos lo del táctil
[1/11/23, 20:06:02] Nicolas 🤳 Selfie Mirror: Hola
[1/11/23, 20:06:16] Nicolas 🤳 Selfie Mirror: Bancame un ratito q estoy en el estudio
[1/11/23, 20:06:30] Gaston - Venta 16-10-23: Ok
[1/11/23, 22:57:59] Gaston - Venta 16-10-23: Cuando lo vemos? Porque tengo una gente que quiere venir a verlo antes de alquilarlo
[1/11/23, 22:58:10] Gaston - Venta 16-10-23: Y le tengo que decir cuando pueden venir
[1/11/23, 22:59:17] Nicolas 🤳 Selfie Mirror: Hola Gastón
[1/11/23, 22:59:21] Nicolas 🤳 Selfie Mirror: Mañana al mediodía podes
[1/11/23, 22:59:28] Nicolas 🤳 Selfie Mirror: Compré un shinmer wall
[1/11/23, 22:59:28] Gaston - Venta 16-10-23: Si
[1/11/23, 22:59:32] Nicolas 🤳 Selfie Mirror: Y estuve hasta recién con eso
[1/11/23, 22:59:35] Nicolas 🤳 Selfie Mirror: Te pido disculpas
[1/11/23, 22:59:48] Nicolas 🤳 Selfie Mirror: Se me pasó
[1/11/23, 22:59:55] Nicolas 🤳 Selfie Mirror: Dale mañana al mediodía hablamos
[2/11/23, 14:18:19] Gaston - Venta 16-10-23: Hola
[2/11/23, 14:19:40] Nicolas 🤳 Selfie Mirror: HOLA
[2/11/23, 14:19:45] Nicolas 🤳 Selfie Mirror: PASAME EL TEAM
[2/11/23, 14:20:02] Gaston - Venta 16-10-23: Ok, lo tengo que prender al espejo?
[2/11/23, 14:20:19] Nicolas 🤳 Selfie Mirror: SISIS
[2/11/23, 14:20:26] Gaston - Venta 16-10-23: Ahí voy
‎[2/11/23, 14:31:21] Gaston - Venta 16-10-23: ‎imagen omitida
[2/11/23, 14:55:14] Nicolas 🤳 Selfie Mirror: Dibuja
[2/11/23, 14:55:29] Gaston - Venta 16-10-23: Voy
[2/11/23, 14:57:14] Nicolas 🤳 Selfie Mirror: Anda bien?
‎[2/11/23, 14:57:39] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 14:57:56] Nicolas 🤳 Selfie Mirror: A ok
[2/11/23, 14:59:24] Nicolas 🤳 Selfie Mirror: Proba ahora
[2/11/23, 15:01:27] Nicolas 🤳 Selfie Mirror: Está al derecho?
‎[2/11/23, 15:01:46] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 15:02:01] Nicolas 🤳 Selfie Mirror: Sisi
[2/11/23, 15:02:07] Nicolas 🤳 Selfie Mirror: Ahí lo corrijo
[2/11/23, 15:06:33] Nicolas 🤳 Selfie Mirror: Toca siempre arriba a la izquierda así puedo saber para q lado gira
[2/11/23, 15:08:35] Nicolas 🤳 Selfie Mirror: Ahí está. Bien?
‎[2/11/23, 15:08:42] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 15:09:38] Nicolas 🤳 Selfie Mirror: 🤨
‎[2/11/23, 15:10:00] Gaston - Venta 16-10-23: ‎Video omitido
[2/11/23, 15:11:10] Nicolas 🤳 Selfie Mirror: Divujs
‎[2/11/23, 15:11:35] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 15:11:47] Nicolas 🤳 Selfie Mirror: Oi
[2/11/23, 15:11:50] Nicolas 🤳 Selfie Mirror: Ok
‎[2/11/23, 15:11:49] Gaston - Venta 16-10-23: ‎audio omitido
‎[2/11/23, 15:12:11] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[2/11/23, 15:12:49] Gaston - Venta 16-10-23: ‎audio omitido
‎[2/11/23, 15:14:23] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 15:14:43] Nicolas 🤳 Selfie Mirror: Ol
[2/11/23, 15:14:47] Nicolas 🤳 Selfie Mirror: Vamos a calibrwar
[2/11/23, 15:33:30] Gaston - Venta 16-10-23: ‎Videollamada perdida
‎[2/11/23, 15:50:29] Gaston - Venta 16-10-23: ‎audio omitido
[2/11/23, 16:08:20] Gaston - Venta 16-10-23: Avísame
[2/11/23, 16:51:20] Gaston - Venta 16-10-23: Lo apago al espejo?
[2/11/23, 16:51:31] Nicolas 🤳 Selfie Mirror: DAME UN TOQ
[2/11/23, 17:41:04] Nicolas 🤳 Selfie Mirror: aca estoyt
[2/11/23, 17:41:18] Gaston - Venta 16-10-23: Ok
[2/11/23, 17:41:52] Gaston - Venta 16-10-23: Q hago?
[2/11/23, 17:42:15] Nicolas 🤳 Selfie Mirror: dbuja
[2/11/23, 17:42:30] Gaston - Venta 16-10-23: No marca nada
[2/11/23, 17:43:48] Gaston - Venta 16-10-23: No marca
[2/11/23, 17:46:00] Nicolas 🤳 Selfie Mirror: Yo a avee
[2/11/23, 17:46:02] Nicolas 🤳 Selfie Mirror: Toca aver
[2/11/23, 18:33:47] Nicolas 🤳 Selfie Mirror: Abrí el team
[2/11/23, 18:33:50] Nicolas 🤳 Selfie Mirror: Cuando oyedas
[2/11/23, 18:34:09] Gaston - Venta 16-10-23: A ver
[2/11/23, 19:57:29] Gaston - Venta 16-10-23: Se quedó en 73%
[2/11/23, 20:11:10] Nicolas 🤳 Selfie Mirror: 74
[2/11/23, 21:14:14] Nicolas 🤳 Selfie Mirror: Ya esgoy
[2/11/23, 21:14:32] Gaston - Venta 16-10-23: Que hago?
[2/11/23, 21:17:31] Nicolas 🤳 Selfie Mirror: No era para vos
[2/11/23, 21:17:58] Gaston - Venta 16-10-23: Quedó en stand by la pantalla
[2/11/23, 21:18:43] Nicolas 🤳 Selfie Mirror: Oki
[2/11/23, 22:47:57] Nicolas 🤳 Selfie Mirror: Ya termkne
[2/11/23, 22:49:07] Gaston - Venta 16-10-23: Pruebo ?
[2/11/23, 22:49:27] Nicolas 🤳 Selfie Mirror: Si proba y apagalo
[2/11/23, 22:49:33] Nicolas 🤳 Selfie Mirror: Seguimos mañana
[2/11/23, 22:49:52] Gaston - Venta 16-10-23: Sigue haciendo lo mismo
[2/11/23, 22:50:00] Nicolas 🤳 Selfie Mirror: Ok
[2/11/23, 22:50:09] Gaston - Venta 16-10-23: Que puede ser?
[2/11/23, 22:50:10] Nicolas 🤳 Selfie Mirror: Lo vamos a cambiar de usb mañaba
[2/11/23, 22:50:26] Nicolas 🤳 Selfie Mirror: Mira por el error que tira
[2/11/23, 22:50:30] Nicolas 🤳 Selfie Mirror: Que es solo en ese lugse
[2/11/23, 22:50:35] Nicolas 🤳 Selfie Mirror: Lugar
[2/11/23, 22:50:48] Nicolas 🤳 Selfie Mirror: Vamos a probar si lo podemos resolver mañana
[2/11/23, 22:51:01] Nicolas 🤳 Selfie Mirror: Sino me lo tenes q mandsr
[2/11/23, 22:51:09] Gaston - Venta 16-10-23: Ok
[2/11/23, 22:51:17] Gaston - Venta 16-10-23: Que garrón
[2/11/23, 22:51:19] Nicolas 🤳 Selfie Mirror: Te soy sincero
[2/11/23, 22:51:22] Nicolas 🤳 Selfie Mirror: No se que es
[2/11/23, 22:51:42] Nicolas 🤳 Selfie Mirror: Porq no puede ser que ande en la pruebs
[2/11/23, 22:51:46] Nicolas 🤳 Selfie Mirror: Y después no
[2/11/23, 22:52:01] Nicolas 🤳 Selfie Mirror: El programa de testeo marca una falla en el medio
[2/11/23, 22:52:10] Nicolas 🤳 Selfie Mirror: Como un corto
[2/11/23, 22:52:21] Nicolas 🤳 Selfie Mirror: Pero eso puede pasar cuando se pega si se dobla
[2/11/23, 22:52:21] Gaston - Venta 16-10-23: Entre enviarlo y que vuelva
[2/11/23, 22:52:25] Gaston - Venta 16-10-23: Se van como dos semanas
[2/11/23, 22:52:28] Nicolas 🤳 Selfie Mirror: Estuvo andsndo
[2/11/23, 22:52:32] Nicolas 🤳 Selfie Mirror: Andando
[2/11/23, 22:52:48] Nicolas 🤳 Selfie Mirror: Y jamás nos pasó q no andén
[2/11/23, 22:52:58] Nicolas 🤳 Selfie Mirror: Osea q dejen de andar
[2/11/23, 22:53:03] Nicolas 🤳 Selfie Mirror: Una vez que anduvo
[2/11/23, 22:53:06] Nicolas 🤳 Selfie Mirror: Andan...
[2/11/23, 22:53:52] Nicolas 🤳 Selfie Mirror: En la mesa del living tengo pegado uno y funciona lo más bien, y lo pegamos así nomas porq fue para probar imaginate
[2/11/23, 22:54:06] Nicolas 🤳 Selfie Mirror: Pero bueno
[2/11/23, 22:54:17] Nicolas 🤳 Selfie Mirror: Con el equipo a distancia no lo puedo resolver
[2/11/23, 22:54:32] Gaston - Venta 16-10-23: Si porque cuando en el testeo tocó anda elctsctil
[2/11/23, 22:54:39] Nicolas 🤳 Selfie Mirror: Claro
[2/11/23, 22:54:41] Gaston - Venta 16-10-23: El tema es cuando pone para firmar
[2/11/23, 22:54:45] Nicolas 🤳 Selfie Mirror: Eso me parece rarisimo
[2/11/23, 22:54:57] Gaston - Venta 16-10-23: Encima acá no está via cargo
[2/11/23, 22:55:01] Gaston - Venta 16-10-23: En la pampa
[2/11/23, 22:55:13] Gaston - Venta 16-10-23: Tengo andreani correo argentino u oca
[2/11/23, 22:55:22] Nicolas 🤳 Selfie Mirror: Mira yo estoy armando uno
[2/11/23, 22:55:36] Nicolas 🤳 Selfie Mirror: Te mando el nudvo
[2/11/23, 22:55:42] Nicolas 🤳 Selfie Mirror: Nuevo y me quedo con el tuyo
‎[2/11/23, 22:55:55] Gaston - Venta 16-10-23: ‎audio omitido
‎[2/11/23, 22:57:34] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[3/11/23, 13:20:21] Gaston - Venta 16-10-23: Hola ya estoy
[3/11/23, 18:34:23] Nicolas 🤳 Selfie Mirror: Gaston
[3/11/23, 18:35:55] Gaston - Venta 16-10-23: Soy mathias
‎[3/11/23, 18:52:24] Gaston - Venta 16-10-23: ‎audio omitido
[6/11/23, 18:30:09] Gaston - Venta 16-10-23: Hola cómo va?
[6/11/23, 18:30:12] Gaston - Venta 16-10-23: Cómo hacemos?
[6/11/23, 18:30:54] Gaston - Venta 16-10-23: Necesito solucionar esto, ya tengo otro evento para diciembre
[6/11/23, 20:43:28] Gaston - Venta 16-10-23: ‎Llamada perdida
[6/11/23, 20:44:31] Nicolas 🤳 Selfie Mirror: Hola gaston
[6/11/23, 20:44:36] Nicolas 🤳 Selfie Mirror: estoy con un problema familiar
[6/11/23, 20:44:40] Nicolas 🤳 Selfie Mirror: podemos hablar mañana?
[6/11/23, 20:44:56] Gaston - Venta 16-10-23: Bueno dale
[6/11/23, 20:45:04] Nicolas 🤳 Selfie Mirror: Gracxias disculpame
[7/11/23, 10:20:32] Nicolas 🤳 Selfie Mirror: Hola gaston
[7/11/23, 11:43:29] Gaston - Venta 16-10-23: Hola como va?
[7/11/23, 12:12:36] Nicolas 🤳 Selfie Mirror: Hola
[7/11/23, 12:50:52] Gaston - Venta 16-10-23: Cómo hacemos?
[7/11/23, 13:04:52] Nicolas 🤳 Selfie Mirror: Como dijimos
[7/11/23, 13:04:56] Nicolas 🤳 Selfie Mirror: pudiste averiuguar eos
‎[7/11/23, 13:07:28] Gaston - Venta 16-10-23: ‎audio omitido
[8/11/23, 21:05:03] Gaston - Venta 16-10-23: ‎Llamada perdida
[8/11/23, 21:18:37] Gaston - Venta 16-10-23: ‎Llamada perdida
[8/11/23, 21:36:50] Gaston - Venta 16-10-23: Podés hablarM
[8/11/23, 21:36:51] Gaston - Venta 16-10-23: ?
[8/11/23, 23:20:49] Nicolas 🤳 Selfie Mirror: Hoila
[8/11/23, 23:21:18] Nicolas 🤳 Selfie Mirror: Perdon la demora, estaba cenando afuera
[8/11/23, 23:21:23] Nicolas 🤳 Selfie Mirror: decime
[8/11/23, 23:23:30] Gaston - Venta 16-10-23: ‎Llamada perdida
[8/11/23, 23:25:25] Gaston - Venta 16-10-23: Llamame
[9/11/23, 00:02:06] Gaston - Venta 16-10-23: Ahí conseguí quien me lo llevé mañana 6:30 am
[9/11/23, 00:02:10] Gaston - Venta 16-10-23: Pásame tus datos
[9/11/23, 00:05:29] Nicolas 🤳 Selfie Mirror: Nicolás Luna
av de mayo 1624 
Ramos mejía 
La matanza 
D n i 36145287
[9/11/23, 00:07:58] Nicolas 🤳 Selfie Mirror: Teléfono 1166704322
WhatsApp ‪11 4005‑4474
‎[9/11/23, 11:14:05] Gaston - Venta 16-10-23: ‎imagen omitida
[9/11/23, 11:25:27] Nicolas 🤳 Selfie Mirror: Te dijeron cuando llegs
[9/11/23, 11:25:50] Gaston - Venta 16-10-23: Eso me mandó el comisionista que lo llevó
[9/11/23, 11:26:05] Gaston - Venta 16-10-23: Pero ahí está en NRO de guia
[9/11/23, 11:26:18] Nicolas 🤳 Selfie Mirror: Sisi
[9/11/23, 11:26:21] Gaston - Venta 16-10-23: Lo voy rastreando
‎[11/11/23, 10:10:25] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[17/11/23, 19:13:01] Gaston - Venta 16-10-23: Hola Nico
[17/11/23, 19:13:05] Gaston - Venta 16-10-23: Ya llegó el espejo ?
[17/11/23, 19:19:06] Nicolas 🤳 Selfie Mirror: No
[17/11/23, 19:19:17] Gaston - Venta 16-10-23: Ya debe estar en el depósito
[17/11/23, 19:19:28] Gaston - Venta 16-10-23: Porque hace 4 días decia en viaje
[17/11/23, 19:19:39] Nicolas 🤳 Selfie Mirror: Si figura en el centro de distribución
[17/11/23, 19:19:42] Gaston - Venta 16-10-23: No sé porque tardo tanto
[17/11/23, 19:19:53] Gaston - Venta 16-10-23: Si para que lo retires por ahi
[17/11/23, 19:20:04] Gaston - Venta 16-10-23: No va a llegar a tu domicilio
[17/11/23, 19:20:09] Nicolas 🤳 Selfie Mirror: Nono
[17/11/23, 19:20:20] Nicolas 🤳 Selfie Mirror: Pero este no es el centro de distribución
[17/11/23, 19:20:34] Gaston - Venta 16-10-23: No puede tardar tanto
[17/11/23, 19:20:38] Gaston - Venta 16-10-23: Ya pasó más de una semana
[17/11/23, 19:21:10] Gaston - Venta 16-10-23: Capaz que el otro pajero que lo llevo a via cargo puso envío standard y no el que es más rápido
[17/11/23, 19:21:25] Gaston - Venta 16-10-23: Tengo un evento pagado el 3 de diciembre
[17/11/23, 19:21:28] Gaston - Venta 16-10-23: Necesito llegar
[17/11/23, 19:21:48] Nicolas 🤳 Selfie Mirror: Yo mande uno a Santa Rosa antes de ayer y ya llfgi
[17/11/23, 19:22:20] Gaston - Venta 16-10-23: Te podés acercar mañana a via cargo a preguntar?
[17/11/23, 19:22:25] Gaston - Venta 16-10-23: Para saber dónde está
[17/11/23, 19:22:29] Nicolas 🤳 Selfie Mirror: Sisi
[17/11/23, 19:22:40] Nicolas 🤳 Selfie Mirror: El mismo día q llega sale devurlta
[17/11/23, 19:22:49] Gaston - Venta 16-10-23: Llegó al 3 de diciembre?
[17/11/23, 19:22:52] Gaston - Venta 16-10-23: Ojalá
[17/11/23, 19:23:13] Nicolas 🤳 Selfie Mirror: Siii
[19/11/23, 19:29:23] Nicolas 🤳 Selfie Mirror: ‎ENCUESTA:
Video conferencia para despejar todas las dudas que tengan. Vamos a tratar de organizar una cada 15 días. Es para que todos despejen sus dudas y vean cómo se resuelven en caso que en algún momento les surja la misma inquietud. Día Lunes 20 de nov. 19 hs
‎OPCIÓN: Asistire (0 votos)
‎OPCIÓN: No asistiré (0 votos)
[20/11/23, 18:50:14] Nicolas 🤳 Selfie Mirror: https://youtube.com/live/UmqEwPcQJ6s?feature=share
[20/11/23, 22:31:45] Nicolas 🤳 Selfie Mirror: VIDEO MASTER CLASS --> https://www.youtube.com/watch?v=nVh0nHvmU34
[22/11/23, 12:53:17] Gaston - Venta 16-10-23: Hola cómo va?
[22/11/23, 12:53:22] Gaston - Venta 16-10-23: Pudiste ir a via cargo?
[22/11/23, 12:53:49] Gaston - Venta 16-10-23: Me sigue figurando en viaje pero no puede ser, ya tiene que haber llegado a la sucursal
[22/11/23, 13:18:49] Nicolas 🤳 Selfie Mirror: si fui y se fijaron en la pc y me dijeron en viaje
[22/11/23, 13:18:58] Nicolas 🤳 Selfie Mirror: ahora en un toque voy a despachar
[22/11/23, 13:19:02] Nicolas 🤳 Selfie Mirror: y pregunto devuelta
[22/11/23, 13:19:11] Gaston - Venta 16-10-23: No puede ser que se demore tanto
[22/11/23, 13:19:18] Gaston - Venta 16-10-23: No voy a llegar al evento del 3 de diciembre
[22/11/23, 13:19:20] Gaston - Venta 16-10-23: 🤦🏻‍♂️
[22/11/23, 13:19:40] Gaston - Venta 16-10-23: Y no me podés enviar otro y quedarte cuando llegue?
[22/11/23, 13:19:46] Gaston - Venta 16-10-23: Porque sino no voy a llegar
[22/11/23, 13:19:56] Gaston - Venta 16-10-23: Estoy preocupado ya
[22/11/23, 14:24:36] Gaston - Venta 16-10-23: Ahí llame a via cargo ramos mejia
[22/11/23, 14:24:41] Gaston - Venta 16-10-23: Me dijo que acaba de llegar
[22/11/23, 14:24:46] Gaston - Venta 16-10-23: Ya está para que lo busques
[22/11/23, 16:11:13] Nicolas 🤳 Selfie Mirror: Oki
[23/11/23, 11:47:41] Gaston - Venta 16-10-23: Hola cómo va?
[23/11/23, 12:14:24] Nicolas 🤳 Selfie Mirror: Yendo a retirar
[23/11/23, 12:14:55] Gaston - Venta 16-10-23: Me alcanza a llegar el martes que viene?
[23/11/23, 12:15:01] Gaston - Venta 16-10-23: Tengo un evento el próximo sábado
‎[23/11/23, 12:38:51] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[23/11/23, 12:39:05] Nicolas 🤳 Selfie Mirror: Así llego
[23/11/23, 12:40:06] Gaston - Venta 16-10-23: ‎Llamada. ‎2 min
[23/11/23, 23:04:58] Nicolas 🤳 Selfie Mirror: Gaston buenas noches
[23/11/23, 23:05:02] Nicolas 🤳 Selfie Mirror: Mañana sale el equipo
[23/11/23, 23:05:33] Gaston - Venta 16-10-23: Hola buenas noches
[23/11/23, 23:05:45] Gaston - Venta 16-10-23: Por via cargo entonces?
[23/11/23, 23:05:49] Nicolas 🤳 Selfie Mirror: Sisi
[23/11/23, 23:05:51] Gaston - Venta 16-10-23: Que llegue lo más rápido posible
[23/11/23, 23:05:59] Nicolas 🤳 Selfie Mirror: el lunes lo tenes ahi
[23/11/23, 23:06:25] Gaston - Venta 16-10-23: Ponelo a mi nombre le doy el DNI al comisionista que lo pasará a buscar por la sucursal de santa rosa
[23/11/23, 23:06:34] Nicolas 🤳 Selfie Mirror: 18 mil pesos valio el envio
[23/11/23, 23:06:45] Nicolas 🤳 Selfie Mirror: si lo pagas al despachar vale 15
[23/11/23, 23:06:50] Nicolas 🤳 Selfie Mirror: aver
[23/11/23, 23:07:23] Gaston - Venta 16-10-23: Ok sumamos todo despcu dividimos
[23/11/23, 23:07:32] Gaston - Venta 16-10-23: Con lo del comisionista de victorica a Sta Rosa
[23/11/23, 23:07:46] Gaston - Venta 16-10-23: Mi nombre es mathias tartalo 35517871
‎[23/11/23, 23:07:50] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[23/11/23, 23:08:04] Nicolas 🤳 Selfie Mirror: menos que eso
[23/11/23, 23:08:08] Nicolas 🤳 Selfie Mirror: es un bulto menos
[23/11/23, 23:08:30] Gaston - Venta 16-10-23: Oka
[23/11/23, 23:10:06] Nicolas 🤳 Selfie Mirror: ok
‎[24/11/23, 12:30:37] Nicolas 🤳 Selfie Mirror: ‎Video omitido
[24/11/23, 12:32:24] Gaston - Venta 16-10-23: Joya
[24/11/23, 12:32:29] Gaston - Venta 16-10-23: Cuál era la falla?
[24/11/23, 12:37:36] Nicolas 🤳 Selfie Mirror: No sé ahora voy a chequearlo
[24/11/23, 12:37:47] Nicolas 🤳 Selfie Mirror: Cambiamos el táctil directamente te por las dudas
[24/11/23, 12:40:45] Gaston - Venta 16-10-23: Oka
‎[24/11/23, 12:42:40] Gaston - Venta 16-10-23: ‎audio omitido
‎[24/11/23, 12:45:14] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[24/11/23, 12:45:34] Nicolas 🤳 Selfie Mirror: No te preguntan
‎[24/11/23, 12:46:15] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[24/11/23, 12:46:23] Gaston - Venta 16-10-23: ‎audio omitido
[24/11/23, 12:47:07] Nicolas 🤳 Selfie Mirror: Dale
[24/11/23, 12:47:16] Nicolas 🤳 Selfie Mirror: Comfirmame los datos así voy
[24/11/23, 12:47:36] Gaston - Venta 16-10-23: Si, están bien
[24/11/23, 12:47:43] Nicolas 🤳 Selfie Mirror: Ok
[24/11/23, 12:47:57] Gaston - Venta 16-10-23: Ojalá salga todo bien 🤞🏻
‎[24/11/23, 12:48:19] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[24/11/23, 12:48:25] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[24/11/23, 16:44:11] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[30/11/23, 23:28:42] Gaston - Venta 16-10-23: Hola
[30/11/23, 23:28:44] Gaston - Venta 16-10-23: Estás?
[30/11/23, 23:34:53] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
‎[30/11/23, 23:31:20] Gaston - Venta 16-10-23: ‎imagen omitida
[30/11/23, 23:31:28] Gaston - Venta 16-10-23: Lo enchufo pero no prende el televisor
[30/11/23, 23:31:35] Gaston - Venta 16-10-23: Hay que tocar algo más atrás?
‎[30/11/23, 23:40:06] Gaston - Venta 16-10-23: ‎imagen omitida
[1/12/23, 11:16:40] Gaston - Venta 16-10-23: Tengo un evento mañana
[1/12/23, 11:16:45] Gaston - Venta 16-10-23: Y no lo puedo prender
[1/12/23, 11:50:42] Nicolas 🤳 Selfie Mirror: Bue. Día
[1/12/23, 11:56:13] Nicolas 🤳 Selfie Mirror: Estás
[1/12/23, 11:56:29] Gaston - Venta 16-10-23: Si, ahí te llamo
[1/12/23, 12:12:19] Gaston - Venta 16-10-23: ‎Llamada. ‎12 min
[1/12/23, 17:57:01] Gaston - Venta 16-10-23: Ya lo ví al vídeo y arme la plantilla
[1/12/23, 17:57:10] Gaston - Venta 16-10-23: Ahora instale la impresora pero el drivers viene en un cd
[1/12/23, 17:57:16] Gaston - Venta 16-10-23: Cómo lo instaló?
[1/12/23, 17:57:21] Nicolas 🤳 Selfie Mirror: Búscalo en internet
[1/12/23, 17:57:30] Gaston - Venta 16-10-23: En la página de Kodak?
[1/12/23, 17:57:33] Nicolas 🤳 Selfie Mirror: O cópialo a un pendrive
‎[1/12/23, 17:57:57] Gaston - Venta 16-10-23: ‎imagen omitida
[1/12/23, 17:58:22] Nicolas 🤳 Selfie Mirror: 👍
‎[1/12/23, 18:06:58] Gaston - Venta 16-10-23: ‎imagen omitida
‎[1/12/23, 18:07:17] Gaston - Venta 16-10-23: ‎audio omitido
[1/12/23, 21:35:57] Gaston - Venta 16-10-23: Cómo puedo corregir eso?
[1/12/23, 21:36:00] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! Horario comercial L - V 10 a 17hs
[1/12/23, 22:16:45] Gaston - Venta 16-10-23: Me podés dar una mano?
[1/12/23, 22:16:53] Gaston - Venta 16-10-23: Estoy trabado en dos pasos
[2/12/23, 13:35:28] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 13:40:35] Gaston - Venta 16-10-23: Estás?
[2/12/23, 14:43:01] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 15:04:17] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 15:16:09] Gaston - Venta 16-10-23: Desde ayer te estoy escribiendo para que me ayudes con un paso que quede trabado
[2/12/23, 15:16:15] Gaston - Venta 16-10-23: Está noche tengo un evento
[2/12/23, 15:32:34] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 15:55:52] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 16:09:01] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 16:49:38] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[2/12/23, 16:50:38] Gaston - Venta 16-10-23: No puedo conectar la impresora al espejo
[2/12/23, 16:50:42] Gaston - Venta 16-10-23: Cómo hago??
[2/12/23, 20:20:45] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[6/12/23, 13:19:37] Gaston - Venta 16-10-23: Hola estás?
[6/12/23, 14:46:10] Nicolas 🤳 Selfie Mirror: Hola
[6/12/23, 16:45:21] Gaston - Venta 16-10-23: ‎Llamada. ‎6 min
[6/12/23, 18:05:13] Gaston - Venta 16-10-23: ‎Llamada. ‎2 min
[6/12/23, 18:05:13] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! Horario comercial L - V 10 a 17hs
[6/12/23, 18:12:27] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[6/12/23, 18:18:43] Nicolas 🤳 Selfie Mirror: https://youtu.be/nVh0nHvmU34?si=ktrBvfV_9q6Tpk06
[6/12/23, 18:19:13] Nicolas 🤳 Selfie Mirror: 38:35
[6/12/23, 18:27:17] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
[6/12/23, 18:28:18] Gaston - Venta 16-10-23: Ahí lo ví
‎[6/12/23, 18:28:35] Gaston - Venta 16-10-23: ‎imagen omitida
[6/12/23, 18:28:36] Gaston - Venta 16-10-23: Sigue imprimiendo asi
[6/12/23, 18:28:57] Nicolas 🤳 Selfie Mirror: Está desactivado el 2 x 0-(3
[6/12/23, 18:32:51] Gaston - Venta 16-10-23: ‎Llamada perdida. ‎Pulsar para volver a llamar
‎[6/12/23, 18:34:05] Gaston - Venta 16-10-23: ‎audio omitido
[6/12/23, 18:38:30] Nicolas 🤳 Selfie Mirror: Bancame que estoy con 4 a la vez
[6/12/23, 18:39:16] Nicolas 🤳 Selfie Mirror: La verdad no tengo idea
[6/12/23, 18:39:23] Nicolas 🤳 Selfie Mirror: Nunca la configure al revés
[6/12/23, 18:39:28] Nicolas 🤳 Selfie Mirror: Fíjate
[6/12/23, 18:41:39] Gaston - Venta 16-10-23: Si cuando elijo una imagen de antes me la imprime como antes, una sola al medio y los bordes blancos
[6/12/23, 18:42:35] Nicolas 🤳 Selfie Mirror: Si era lógico igual porque si sería una 10x15 la cortaría al medio
[6/12/23, 19:05:13] Nicolas 🤳 Selfie Mirror: Récords que los horarios son de 10 a 17 de lunes a viernes
[6/12/23, 19:05:41] Nicolas 🤳 Selfie Mirror: Me llamas en ese horario no hay ningún drama
[6/12/23, 19:05:43] Gaston - Venta 16-10-23: Oka, cualquier cosa te consulto mañana
[6/12/23, 19:06:03] Gaston - Venta 16-10-23: Tengo que armar dos plantillas para el sábado,
[6/12/23, 19:06:13] Gaston - Venta 16-10-23: Ya le agarre la mano más o menos
[6/12/23, 19:06:15] Nicolas 🤳 Selfie Mirror: Te pase el número de gonza
[6/12/23, 19:06:20] Gaston - Venta 16-10-23: No
‎[6/12/23, 19:07:17] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[2/1/24, 16:45:25] Gaston - Venta 16-10-23: Hola cómo va?
[2/1/24, 16:45:35] Gaston - Venta 16-10-23: Ya está para usar en QR?
[4/1/24, 14:45:54] Nicolas 🤳 Selfie Mirror: Hola Gastón
[4/1/24, 14:46:25] Nicolas 🤳 Selfie Mirror: Semana que viene está la actualización
[4/1/24, 14:46:34] Nicolas 🤳 Selfie Mirror: Estoy armando el sitio de soporte
[4/1/24, 14:47:25] Nicolas 🤳 Selfie Mirror: Asistencia.espejoselfiemirror.com.ar
[12/1/24, 13:42:54] Gaston - Venta 16-10-23: Hola cómo va?
[12/1/24, 13:43:02] Gaston - Venta 16-10-23: Ya está disponible el QR?
[12/1/24, 13:43:09] Gaston - Venta 16-10-23: Mañana tengo un evento
[12/1/24, 13:43:25] Gaston - Venta 16-10-23: Y sin QR me consume una banda la impresora
[12/1/24, 13:44:02] Gaston - Venta 16-10-23: De 200 a 380 se fueron los insumos de la 305
[13/1/24, 06:43:52] Nicolas 🤳 Selfie Mirror: Cuando esté disponible va a estar ahí


OTRO EJEMPLO:
[20/7/23, 11:26:33] Selfie ANA RIO GALLEGOS 2023 Venta: ‎Los mensajes y las llamadas están cifrados de extremo a extremo. Nadie fuera de este chat, ni siquiera WhatsApp, puede leerlos ni escucharlos.
[20/7/23, 11:26:33] Nicolas 🤳 Selfie Mirror: Hola Ana, buen dia
[20/7/23, 11:26:47] Nicolas 🤳 Selfie Mirror: Soy Nicolás, de Selfie Mirror
[20/7/23, 11:29:36] Selfie ANA RIO GALLEGOS 2023 Venta: Buen dia como estas
[20/7/23, 11:29:46] Nicolas 🤳 Selfie Mirror: Bien Gracias
[20/7/23, 11:59:50] Nicolas 🤳 Selfie Mirror: Qué producto le interesa?
[20/7/23, 12:00:10] Selfie ANA RIO GALLEGOS 2023 Venta: el espejo!
[20/7/23, 12:18:38] Nicolas 🤳 Selfie Mirror: Tengo el modelo slim
‎[20/7/23, 12:19:16] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:17] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:17] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:18] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:18] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:19] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:19] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[20/7/23, 12:19:20] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
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
[21/7/23, 17:05:35] Nicolas 🤳 Selfie Mirror: te envio las cosas
‎[21/7/23, 17:06:05] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:06:05] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:06:05] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:06:17] Nicolas 🤳 Selfie Mirror: ese es el marco que te comentaba
[21/7/23, 17:06:25] Nicolas 🤳 Selfie Mirror: ese es el modelo del espejo con tapa y sin tapa
‎[21/7/23, 17:07:12] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:13] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:13] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:13] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:34] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:35] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:35] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:37] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:37] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:37] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:38] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:07:39] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[21/7/23, 17:09:04] Nicolas 🤳 Selfie Mirror: Para transportar las columnas y la impresora se puede hacer un baúl de traslado
‎[21/7/23, 17:09:20] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:09:20] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:09:21] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[21/7/23, 17:09:23] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
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
[5/8/23, 08:42:47] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buen día perdón no te contrsge!
[5/8/23, 08:42:51] Selfie ANA RIO GALLEGOS 2023 Venta: Mmmmm ya te averiguo
‎[5/8/23, 08:54:17] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[5/8/23, 08:57:42] Selfie ANA RIO GALLEGOS 2023 Venta: Q le falta el marco nomás ? O viene aparte ! Como es? 
Que emoción !!!!!! 

Ahí están averiguando si están hoy en el
Depo
[5/8/23, 08:57:52] Nicolas 🤳 Selfie Mirror: Genial
[5/8/23, 08:58:06] Nicolas 🤳 Selfie Mirror: La tapa le falta ahí
[5/8/23, 08:58:24] Nicolas 🤳 Selfie Mirror: Ya lo tengo embalado
[5/8/23, 08:58:33] Nicolas 🤳 Selfie Mirror: Va la tapa y el marco va aparte
[5/8/23, 08:58:35] Nicolas 🤳 Selfie Mirror: Se saca la tapa
[5/8/23, 08:58:40] Nicolas 🤳 Selfie Mirror: Y se pone el marco
‎[5/8/23, 08:59:44] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[5/8/23, 08:59:45] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[5/8/23, 08:59:45] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
‎[5/8/23, 08:59:46] Nicolas 🤳 Selfie Mirror: ‎imagen omitida
[5/8/23, 08:59:57] Nicolas 🤳 Selfie Mirror: No se si me explico
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
[11/8/23, 18:18:10] Nicolas 🤳 Selfie Mirror: Hola buenas tardes
[11/8/23, 18:18:13] Nicolas 🤳 Selfie Mirror: Llego?
[11/8/23, 18:20:57] Selfie ANA RIO GALLEGOS 2023 Venta: Me lo acaban de descargar en el local
[11/8/23, 18:20:58] Selfie ANA RIO GALLEGOS 2023 Venta: Recién
[11/8/23, 18:20:59] Selfie ANA RIO GALLEGOS 2023 Venta: Jajaja
[11/8/23, 18:21:03] Selfie ANA RIO GALLEGOS 2023 Venta: Me avisaron los chicos
[11/8/23, 18:21:10] Selfie ANA RIO GALLEGOS 2023 Venta: Este finde lo pruebo
‎[12/8/23, 12:00:55] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[12/8/23, 12:07:28] Nicolas 🤳 Selfie Mirror: Ya te digo
‎[12/8/23, 12:20:35] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[12/8/23, 12:22:39] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
‎[12/8/23, 12:23:13] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[12/8/23, 12:30:46] Nicolas 🤳 Selfie Mirror: Sisi todo de ahí
[12/8/23, 12:30:49] Nicolas 🤳 Selfie Mirror: Ya esta todo listo
‎[12/8/23, 12:32:47] Nicolas 🤳 Selfie Mirror: ‎audio omitido
‎[13/8/23, 11:54:25] Selfie ANA RIO GALLEGOS 2023 Venta: ‎imagen omitida
[13/8/23, 11:55:37] Selfie ANA RIO GALLEGOS 2023 Venta: No arranca la compu
[13/8/23, 11:56:09] Nicolas 🤳 Selfie Mirror: Prende la luz?
[13/8/23, 11:56:14] Selfie ANA RIO GALLEGOS 2023 Venta: Buen día perdón
[13/8/23, 11:56:21] Nicolas 🤳 Selfie Mirror: Buen día
[13/8/23, 11:56:33] Selfie ANA RIO GALLEGOS 2023 Venta: Cuál Luz ?
[13/8/23, 11:56:46] Nicolas 🤳 Selfie Mirror: En la puerta de abajo
[13/8/23, 11:56:56] Nicolas 🤳 Selfie Mirror: Vas a ver la pc
[13/8/23, 11:56:58] Nicolas 🤳 Selfie Mirror: Está abajo
[13/8/23, 11:57:03] Nicolas 🤳 Selfie Mirror: Fíjate si prende la luz
[13/8/23, 11:57:20] Selfie ANA RIO GALLEGOS 2023 Venta: No no prende luz
[13/8/23, 11:57:27] Nicolas 🤳 Selfie Mirror: Ni amarilla ni azul?
[13/8/23, 11:57:55] Nicolas 🤳 Selfie Mirror: Sino prende ningún color fíjate q se debe aver desconectado en el viaje
[13/8/23, 11:58:04] Nicolas 🤳 Selfie Mirror: Move los cables
[13/8/23, 11:58:17] Nicolas 🤳 Selfie Mirror: Báncame un toque que votó y lo arreglamos
[13/8/23, 11:58:25] Selfie ANA RIO GALLEGOS 2023 Venta: Dale
[13/8/23, 11:58:29] Selfie ANA RIO GALLEGOS 2023 Venta: Avísame y te llamamos
[13/8/23, 12:34:09] Selfie ANA RIO GALLEGOS 2023 Venta: Listo ya arranco !
[13/8/23, 12:34:18] Selfie ANA RIO GALLEGOS 2023 Venta: Ahora te mando una serie de consultas para q me digas cómo hacer ! Jajaja
[13/8/23, 12:34:26] Selfie ANA RIO GALLEGOS 2023 Venta: X ejemplo bajar el tiempo de espera de las fotos !
[13/8/23, 12:34:30] Selfie ANA RIO GALLEGOS 2023 Venta: Poner qr
[13/8/23, 12:34:34] Selfie ANA RIO GALLEGOS 2023 Venta: Como armar las plantillas y eso
[13/8/23, 13:36:13] Nicolas 🤳 Selfie Mirror: Actualiza el team viewer
[15/8/23, 12:26:46] Nicolas 🤳 Selfie Mirror: Hola Anaa, cuando tengas tiempo avisame y hacemos lo del espejo.. Gracias
‎[15/8/23, 12:30:12] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[15/8/23, 12:32:25] Nicolas 🤳 Selfie Mirror: Si, avisame y voy a la ofi
[15/8/23, 12:32:32] Nicolas 🤳 Selfie Mirror: No hay problema
[20/8/23, 20:18:52] Nicolas 🤳 Selfie Mirror: Hola buenas noches. Quería saber cómo iba lo del espejo?
[22/10/23, 18:12:04] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buenas cómo estás ??? 
Bueno recién me estoy x poner con el espejo! Decime cuando puedo conectártelo así me haces algunas modificaciones ! Puede ser ?? Y la plantilla p la fiesta si podes darme una mano!
[22/10/23, 18:12:06] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! Horario comercial L - V 10 a 17hs
[6/11/23, 14:09:14] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buen día
[6/11/23, 14:09:18] Selfie ANA RIO GALLEGOS 2023 Venta: Cómo estás
[6/11/23, 14:11:53] Selfie ANA RIO GALLEGOS 2023 Venta: ! Decime cuando puedo conectártelo así me haces algunas modificaciones ! Puede ser ?? Y la plantilla p la fiesta si podes darme una mano!
[6/11/23, 14:42:28] Selfie ANA RIO GALLEGOS 2023 Venta: Xq este finde es la  fiesta
[6/11/23, 18:40:09] Selfie ANA RIO GALLEGOS 2023 Venta: Hola
‎[6/11/23, 19:39:34] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[7/11/23, 10:14:57] Nicolas 🤳 Selfie Mirror: Hola
[7/11/23, 10:16:29] Selfie ANA RIO GALLEGOS 2023 Venta: Hola cómo estás
[7/11/23, 10:17:28] Nicolas 🤳 Selfie Mirror: Bien vos
[7/11/23, 10:18:25] Selfie ANA RIO GALLEGOS 2023 Venta: Bien bien! 
Quería ver si esta tarde o nochecita podemos conectar el espejo p configurarlo ! 
Si puede ser entre las 13 y las 15 o después de las 18?
[7/11/23, 10:20:19] Nicolas 🤳 Selfie Mirror: Si dale a las 13
[7/11/23, 10:20:34] Selfie ANA RIO GALLEGOS 2023 Venta: Genial dale !
[7/11/23, 14:05:52] Selfie ANA RIO GALLEGOS 2023 Venta: Hola cómo estás 
Me dice mi hermano q le dijiste q ibas. A mandarle un video de confirguracion. 
Primero q habíamos quedado q esas modificaciones me las hacías vos, vos me lo ofreciste, pero bueno no pasa nada n 
Pero que ande súper lento todo el sistema es problema tuyo, vos decís q problemas corregís no configuración
[7/11/23, 14:05:56] Selfie ANA RIO GALLEGOS 2023 Venta: Y eso es un problema
[7/11/23, 14:05:58] Selfie ANA RIO GALLEGOS 2023 Venta: De origen
[7/11/23, 14:06:04] Selfie ANA RIO GALLEGOS 2023 Venta: Así q necesitaría que aunque sea veas eso
[7/11/23, 14:06:20] Selfie ANA RIO GALLEGOS 2023 Venta: Lo demás intentamos hacerlo nosotros no te preocupes
[7/11/23, 14:06:28] Selfie ANA RIO GALLEGOS 2023 Venta: Pero de un principio habíamos quedado en otra cosa
‎[7/11/23, 14:09:55] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido
[7/11/23, 14:10:06] Selfie ANA RIO GALLEGOS 2023 Venta: Envíame el tutorial xq nunca me lo enviaste tampoc
‎[7/11/23, 14:32:25] Nicolas 🤳 Selfie Mirror: ‎audio omitido
[7/11/23, 14:36:53] Selfie ANA RIO GALLEGOS 2023 Venta: No no si ya intentamos ya lo abrimos probamos todo
[7/11/23, 14:37:00] Selfie ANA RIO GALLEGOS 2023 Venta: Por eso es que te digo q es muy lento
[7/11/23, 14:37:09] Selfie ANA RIO GALLEGOS 2023 Venta: Y que necesitamos bajarle el tiempo de espera a las fotos
[7/11/23, 14:37:19] Selfie ANA RIO GALLEGOS 2023 Venta: Porque ya lo probamos varias veces
[7/11/23, 15:24:09] Nicolas 🤳 Selfie Mirror: Pero el tiempo de espera no es que este lento
[7/11/23, 15:24:15] Nicolas 🤳 Selfie Mirror: lento es que tarde en cargar
[7/11/23, 15:24:19] Nicolas 🤳 Selfie Mirror: no que el contador sea largo
[7/11/23, 15:24:23] Selfie ANA RIO GALLEGOS 2023 Venta: Si si eso aparte
[7/11/23, 15:24:28] Selfie ANA RIO GALLEGOS 2023 Venta: Las dos cosas
[7/11/23, 15:24:34] Selfie ANA RIO GALLEGOS 2023 Venta: Ósea es lento
[7/11/23, 15:24:44] Selfie ANA RIO GALLEGOS 2023 Venta: Y aparte el
Contador necesitamos achicar
[7/11/23, 15:29:52] Nicolas 🤳 Selfie Mirror: https://youtube.com/playlist?list=PLdP5sEqPie6VmNQQ5GR0kxogieHWNm3k0&si=JRbi1MJkRzHU6QJH
[7/11/23, 15:30:02] Nicolas 🤳 Selfie Mirror: Ahi esta toda la configiuracion para que lo puedas hacer
[7/11/23, 15:30:10] Nicolas 🤳 Selfie Mirror: Si cuando terminas
[7/11/23, 15:30:13] Nicolas 🤳 Selfie Mirror: tenes un problema
[7/11/23, 15:30:16] Nicolas 🤳 Selfie Mirror: entro y lo resuelvo
[7/11/23, 15:30:25] Nicolas 🤳 Selfie Mirror: yo no armo diseños
[7/11/23, 15:30:30] Nicolas 🤳 Selfie Mirror: te lo pongo a imprimir
[7/11/23, 15:30:38] Nicolas 🤳 Selfie Mirror: vos tenes que buscar fondos, armar la plantilla etc
[7/11/23, 15:30:43] Nicolas 🤳 Selfie Mirror: yo resuelvo si hiciste algo mal
[7/11/23, 15:30:43] Selfie ANA RIO GALLEGOS 2023 Venta: Ok
[7/11/23, 15:31:27] Nicolas 🤳 Selfie Mirror: si queres alguien que te arme la plantilla te paso el diseñador
[7/11/23, 15:31:43] Nicolas 🤳 Selfie Mirror: que me arma las mias
[7/11/23, 15:31:51] Selfie ANA RIO GALLEGOS 2023 Venta: Pásame x las dudas
[7/11/23, 15:31:59] Selfie ANA RIO GALLEGOS 2023 Venta: Si no puedo armarlo lo contacto
[7/11/23, 15:32:00] Nicolas 🤳 Selfie Mirror: dale dame un toque ya te paso
[7/11/23, 17:58:57] Selfie ANA RIO GALLEGOS 2023 Venta: me pasas xfa
[7/11/23, 18:13:44] Nicolas 🤳 Selfie Mirror: Ahí se lo pedí pero no me contestó
[7/11/23, 18:13:52] Nicolas 🤳 Selfie Mirror: Me manejo por mail
[7/11/23, 18:14:04] Nicolas 🤳 Selfie Mirror: Mándale mail
[7/11/23, 18:17:52] Nicolas 🤳 Selfie Mirror: Dise.fv@gmail.com
[19/11/23, 19:36:47] Nicolas 🤳 Selfie Mirror: ‎ENCUESTA:
Video conferencia para despejar todas las dudas que tengan. Vamos a tratar de organizar una cada 15 días. Es para que todos despejen sus dudas y vean cómo se resuelven en caso que en algún momento les surja la misma inquietud. Día Lunes 20 de nov. 19 hs
‎OPCIÓN: Asistire (1 voto)
‎OPCIÓN: No asistiré (0 votos)
[20/11/23, 18:50:19] Nicolas 🤳 Selfie Mirror: https://youtube.com/live/UmqEwPcQJ6s?feature=share
[20/11/23, 22:32:08] Nicolas 🤳 Selfie Mirror: VIDEO MASTER CLASS --> https://www.youtube.com/watch?v=nVh0nHvmU34
‎[30/11/23, 07:09:46] Nicolas 🤳 Selfie Mirror: ‎Tarjeta de contacto omitida
[30/11/23, 07:09:46] Nicolas 🤳 Selfie Mirror: Hola! Buen día!! Les paso el nuevo número de gonza el diseñador de las plantillas por cualquier cosa! Saludos!!
[11/12/23, 17:04:27] Selfie ANA RIO GALLEGOS 2023 Venta: Hola buen día
[11/12/23, 17:04:28] Nicolas 🤳 Selfie Mirror: Gracias por tu mensaje. En este momento no estamos disponibles, te responderemos cuando estemos disponibles nuevamente! Horario comercial L - V 10 a 17hs
‎[11/12/23, 17:05:25] Selfie ANA RIO GALLEGOS 2023 Venta: ‎audio omitido

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
