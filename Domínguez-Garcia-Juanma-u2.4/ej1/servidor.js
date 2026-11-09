
const http = require('http')

const rutas = {
    '/': `
        <h1>Inicio</h1>
        <a href="/sobre-mi">Sobre mí</a>
        <br>
        <a href="/aficiones">Mis aficiones</a>
        <br>
        <a href="/hora">La hora</a>
    `,

    '/sobre-mi': `
        <h1>Mi nombre es Juanma</h1>
        <p>Me gustan los videojuegos y jugar al tenis.
        También disfruto leyendo manga y pasando tiempo
        con mis amigos.</p>
    `,

    '/aficiones': `
        <h1>Mis aficiones</h1>
        <ul>
            <li>Jugar videojuegos</li>
            <li>Salir al parque</li>
            <li>Leer manga</li>
        </ul>
    `,

    '/hora': () => `
        <h1>Son las ${new Date().toLocaleTimeString('es-ES')}</h1>
    `
}

const servidor = http.createServer((req, res) => {

    const url = new URL(req.url, 'http://localhost')

    // Mostrar petición en la terminal
    console.log(`${req.method} ${req.url}`)

    // Indicar que todas las respuestas son HTML
    const cabeceras = {
        'Content-Type': 'text/html; charset=utf-8'
    }

    if (rutas[url.pathname]) {

        const contenido = typeof rutas[url.pathname] === 'function'
            ? rutas[url.pathname]()
            : rutas[url.pathname]

        res.writeHead(200, cabeceras)
        return res.end(contenido)
    }

    res.writeHead(404, cabeceras)
    res.end(`
        <h1>Error 404: la ruta no existe</h1>
        <a href="/">Volver al inicio</a>
    `)
})

servidor.listen(3000, () => {
    console.log('Servidor en http://localhost:3000')
})
