const segundos = Number(process.argv[2]);
const mensaje = process.argv.slice(3).join(" ") || "¡Tiempo!";

if (!Number.isInteger(segundos) || segundos <= 0) {
    console.error("Uso: node temporizador.js <segundos> [mensaje]");
    process.exit(1);
}

console.time("Duración total");

let restantes = segundos;

const intervalo = setInterval(() => {
    restantes--;

    console.log(`Quedan ${restantes} s`);

    if (restantes === 0) {
        clearInterval(intervalo);
        console.log(mensaje);
        console.timeEnd("Duración total");
    }
}, 1000);

setTimeout(() => {
    console.log("¡Ya vas por la mitad!");
}, segundos * 1000 / 2);