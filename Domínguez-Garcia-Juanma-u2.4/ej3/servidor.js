
const http = require('http')
const fs = require('fs')
const path = require('path')

const firmas = []

const servidor = http.createServer((req, res) => {

    const url = new URL(req.url, 'http://localhost')

    console.log(`${req.method} ${req.url}`)

    if (req.method === 'GET' && url.pathname === '/') {

        const ruta = path.join(__dirname, 'recursos', 'formulario.html')

        fs.readFile(ruta, (error, datos) => {
            if (error) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8'
                })
                return res.end('Error 500')
            }

            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })

            res.end(datos)
        })

    } else if (req.method === 'POST' && url.pathname === '/firmar') {

        let cuerpo = ''

        req.on('data', trozo => {
            cuerpo += trozo
        })

        req.on('end', () => {

            const datos = new URLSearchParams(cuerpo)

            const nombre = (datos.get('nombre') || '').trim()
            const mensaje = (datos.get('mensaje') || '').trim()

            if (!nombre || !mensaje || mensaje.length > 200) {
                res.writeHead(400, {
                    'Content-Type': 'text/html; charset=utf-8'
                })

                return res.end(`
                    <h1>Error 400</h1>
                    <p>El nombre y el mensaje son obligatorios.
                    El mensaje no puede superar los 200 caracteres.</p>
                    <a href="/">Volver al inicio</a>
                `)
            }

            const firma = {
                nombre: nombre,
                mensaje: mensaje,
                fecha: new Date()
            }

            firmas.push(firma)

            res.writeHead(201, {
                'Content-Type': 'text/html; charset=utf-8'
            })

            res.end(`
                <h1>Gracias por firmar, ${escaparHTML(nombre)}</h1>
                <a href="/">Volver al inicio</a>
            `)
        })

    } else if (req.method === 'GET' && url.pathname === '/firmas') {

        const nombre = url.searchParams.get('nombre')

        let resultado = firmas

        if (nombre) {
            resultado = firmas.filter(firma =>
                firma.nombre.toLowerCase() === nombre.trim().toLowerCase()
            )
        }

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        })

        res.end(JSON.stringify(resultado, null, 2))

    } else {

        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end('<h1>Error 404</h1>')
    }
})

function escaparHTML(texto) {
    return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}

function escaparHTML(texto) {
    return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
}


servidor.listen(3000, () => {
    console.log('Servidor en http://localhost:3000')
})
