"use strict";
class Employee {
    nombre;
    apellido;
    edad;
    fechaInicio;
    fechaFin;
    profesion;
    // Constructor
    constructor(nombre, apellido, edad, fechaInicio, fechaFin, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesion = profesion;
    }
    // Get y set del nombre
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    // Get y set del apellido
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    // Get y set de la edad
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    // Get y set de la fecha de inicio
    getFechaInicio() {
        return this.fechaInicio;
    }
    setFechaInicio(fechaInicio) {
        this.fechaInicio = fechaInicio;
    }
    // Get y set de la fecha de finalización
    getFechaFin() {
        return this.fechaFin;
    }
    setFechaFin(fechaFin) {
        this.fechaFin = fechaFin;
    }
    // Get y set de la profesión
    getProfesion() {
        return this.profesion;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
}
// Creamos dos empleados
let empleado1 = new Employee("Juan", "García", 35, new Date("2018-03-15"), new Date("2023-06-30"), "Programador");
let empleado2 = new Employee("María", "López", 28, new Date("2022-09-01"), null, "Diseñadora");
// Mostramos el nombre y la edad por consola
console.log("Nombre: " + empleado1.getNombre());
console.log("Edad: " + empleado1.getEdad());
console.log("Nombre: " + empleado2.getNombre());
console.log("Edad: " + empleado2.getEdad());
