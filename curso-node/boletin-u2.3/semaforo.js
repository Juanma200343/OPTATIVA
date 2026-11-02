const EventEmitter = require('events');

class Semaforo extends EventEmitter {
    constructor(tiempo) {
        super();

        this.colores = ['verde', 'ámbar', 'rojo'];
        this.indice = 0;
        this.color = 'verde';

        this.intervalo = setInterval(() => {
            this.indice = (this.indice + 1) % this.colores.length;
            this.color = this.colores[this.indice];

            this.emit('cambio', this.color);

            if (this.color === 'rojo') {
                this.emit('rojo');
            }
        }, tiempo);
    }

    parar() {
        clearInterval(this.intervalo);
        this.emit('parado');
    }
}

module.exports = Semaforo;