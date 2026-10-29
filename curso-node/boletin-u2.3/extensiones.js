
const fs = require('fs')
const path = require('path')

const carpeta = process.argv[2] || __dirname
const archivos = fs.readdirSync(carpeta)

const extensiones = {}

for (const archivo of archivos) {
    const extension = path.extname(archivo) || '(sin extensión)'

    if (extensiones[extension]) {
        extensiones[extension]++
    } else {
        extensiones[extension] = 1
    }
}

console.table(
    Object.entries(extensiones).map(([extension, cantidad]) => ({
        extension,
        cantidad
    }))
)
