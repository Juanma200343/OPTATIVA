"use strict";
// Clase Laptop que implementa la interfaz creada previamente
class Laptop {
    nombre;
    encendido;
    modelo;
    constructor(nombre, modelo) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log(this.nombre + " está encendida.");
    }
    apagar() {
        this.encendido = false;
        console.log(this.nombre + " está apagada.");
    }
    // Método abrirPrograma de Laptop
    abrirPrograma(programa) {
        if (this.encendido) {
            console.log("Abriendo el programa " + programa + " en " + this.modelo);
        }
        else {
            console.log("Debes encender el portátil primero.");
        }
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
}
class Smartphone {
    nombre;
    encendido;
    marca;
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log(this.nombre + " está encendido.");
    }
    apagar() {
        this.encendido = false;
        console.log(this.nombre + " está apagado.");
    }
    // Método llamar de Smartphone
    llamar(contacto) {
        if (this.encendido) {
            console.log("Llamando a " + contacto + " desde el " + this.marca);
        }
        else {
            console.log("Debes encender el móvil primero.");
        }
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
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
