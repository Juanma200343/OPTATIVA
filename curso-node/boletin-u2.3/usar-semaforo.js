const Semaforo = require('./semaforo');

const semaforo = new Semaforo(2000);

let rojos = 0;

semaforo.on('cambio', (color) => {
    console.log(color);
});

semaforo.on('rojo', () => {
    rojos++;

    if (rojos === 1) {
        console.log('(primer rojo: ¡frena!)');
    }

    if (rojos === 2) {
        semaforo.parar();
    }
});

semaforo.on('parado', () => {
    console.log('Semáforo apagado');
});