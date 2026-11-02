
const fs = require('fs');

process.stdout.write("¿Qué fichero quieres copiar? ");

process.stdin.setEncoding('utf8');

process.stdin.once('data', (origen) => {
    origen = origen.trim();

    const destino = `MAYUS-${origen}`;

    const lectura = fs.createReadStream(origen, 'utf8');
    const escritura = fs.createWriteStream(destino);

    let bytes = 0;

    lectura.on('data', (trozo) => {
        const mayusculas = trozo.toUpperCase();

        bytes += Buffer.byteLength(mayusculas, 'utf8');

        escritura.write(mayusculas);
    });

    lectura.on('end', () => {
        escritura.end();
    });

    lectura.on('error', (error) => {
        console.error("Error al leer el fichero:", error.message);
        process.exit(1);
    });

    escritura.on('error', (error) => {
        console.error("Error al escribir el fichero:", error.message);
        process.exit(1);
    });

    escritura.on('finish', () => {
        console.log(`Creado ${destino} (${bytes} bytes)`);
    });
});
