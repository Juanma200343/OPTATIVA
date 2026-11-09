
const http = require('http')
const fs = require('fs')
const path = require('path')

const tipos = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8'
}

const servidor = http.createServer((req, res) => {

    const url = new URL(req.url, 'http://localhost')

    console.log(`${req.method} ${req.url}`)

    let fichero
    let codigo

    if (url.pathname === '/') {
        fichero = 'index.html'
        codigo = 200
    } else if (url.pathname === '/contacto') {
        fichero = 'contacto.html'
        codigo = 200
    } else if (url.pathname === '/estilos.css') {
        fichero = 'estilos.css'
        codigo = 200
    } else {
        fichero = '404.html'
        codigo = 404
    }

    const ruta = path.join(__dirname, 'paginas', fichero)

    const extension = path.extname(ruta)

    const contentType = tipos[extension] || 'text/plain; charset=utf-8'

    fs.readFile(ruta, (error, datos) => {

        if (error) {
            res.writeHead(500, {
                'Content-Type': 'text/plain; charset=utf-8'
            })
            return res.end('Error 500: no se pudo leer el fichero')
        }

        res.writeHead(codigo, {
            'Content-Type': contentType
        })

        res.end(datos)
    })
})

servidor.listen(3000, () => {
    console.log('Servidor en http://localhost:3000')
})
