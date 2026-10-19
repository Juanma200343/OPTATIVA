"use strict";
class Animal {
    nombre;
    edad;
    tipo;
    // Constructor
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    // Getters y setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    // Método general
    hacerRuido() {
        console.log("El animal hace un ruido.");
    }
}
//Perro extiende de Animal
class Perro extends Animal {
    raza;
    constructor(nombre, edad, raza) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    // Método propio del perro
    ladrar() {
        console.log(this.getNombre() + " está ladrando: ¡Guau, guau!");
    }
    // Sobrescribimos el método del padre
    hacerRuido() {
        console.log("¡Guau, guau!");
    }
}
//Pajaro extiende de Animal
class Pajaro extends Animal {
    puedeVolar;
    constructor(nombre, edad, puedeVolar) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }
    getPuedeVolar() {
        return this.puedeVolar;
    }
    setPuedeVolar(puedeVolar) {
        this.puedeVolar = puedeVolar;
    }
    // Método propio del pájaro
    volar() {
        if (this.puedeVolar) {
            console.log(this.getNombre() + " está volando.");
        }
        else {
            console.log(this.getNombre() + " no puede volar.");
        }
    }
    // Sobrescribimos el método heredado
    hacerRuido() {
        console.log("¡Pío, pío!");
    }
}
// Creamos los animales
let perro1 = new Perro("Toby", 4, "Labrador");
let pajaro1 = new Pajaro("Piolín", 2, true);
// Mostramos los datos del perro
console.log("Nombre: " + perro1.getNombre());
console.log("Edad: " + perro1.getEdad());
console.log("Tipo: " + perro1.getTipo());
console.log("Raza: " + perro1.getRaza());
perro1.hacerRuido();
perro1.ladrar();
// Mostramos los datos del pájaro
console.log("Nombre: " + pajaro1.getNombre());
console.log("Edad: " + pajaro1.getEdad());
console.log("Tipo: " + pajaro1.getTipo());
console.log("¿Puede volar?: " + pajaro1.getPuedeVolar());
pajaro1.hacerRuido();
pajaro1.volar();
