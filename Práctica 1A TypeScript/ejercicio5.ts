
interface DispositivoElectronico {
    nombre: string;
    encendido: boolean;

    encender(): void;
    apagar(): void;
}


// Clase Laptop que implementa la interfaz creada previamente
class Laptop implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    private modelo: string;

    constructor(nombre: string, modelo: string) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(): void {
        this.encendido = true;
        console.log(this.nombre + " está encendida.");
    }

    apagar(): void {
        this.encendido = false;
        console.log(this.nombre + " está apagada.");
    }

    // Método abrirPrograma de Laptop
    abrirPrograma(programa: string): void {
        if (this.encendido) {
            console.log("Abriendo el programa " + programa + " en " + this.modelo);
        } else {
            console.log("Debes encender el portátil primero.");
        }
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}



class Smartphone implements DispositivoElectronico {
    nombre: string;
    encendido: boolean;
    private marca: string;

    constructor(nombre: string, marca: string) {
        this.nombre = nombre;
        this.marca = marca;
        this.encendido = false;
    }

    encender(): void {
        this.encendido = true;
        console.log(this.nombre + " está encendido.");
    }

    apagar(): void {
        this.encendido = false;
        console.log(this.nombre + " está apagado.");
    }

    // Método llamar de Smartphone
    llamar(contacto: string): void {
        if (this.encendido) {
            console.log("Llamando a " + contacto + " desde el " + this.marca);
        } else {
            console.log("Debes encender el móvil primero.");
        }
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }
}


// Creamos las instancias
let laptop1 = new Laptop("Mi portátil", "HP Pavilion");
let smartphone1 = new Smartphone("Mi móvil", "Samsung");

// Probamos los métodos de Laptop
laptop1.encender();
laptop1.abrirPrograma("Visual Studio Code");
laptop1.apagar();

console.log("--------------------");

// Probamos los métodos de Smartphone
smartphone1.encender();
smartphone1.llamar("Juan");
smartphone1.apagar();
