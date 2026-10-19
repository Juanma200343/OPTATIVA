"use strict";
class Almacen {
    elementos;
    constructor() {
        this.elementos = [];
    }
    // Método para agregar un elemento
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    // Método para obtener un elemento por su posición
    obtenerElemento(posicion) {
        return this.elementos[posicion];
    }
    // Método para listar todos los elementos
    listarElementos() {
        for (let elemento of this.elementos) {
            console.log(elemento);
        }
    }
}
// Almacén de números
let almacenNumeros = new Almacen();
almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(20);
almacenNumeros.agregarElemento(30);
console.log("Almacén de números:");
almacenNumeros.listarElementos();
console.log("Elemento en posición 1:");
console.log(almacenNumeros.obtenerElemento(1));
// Almacén de cadenas de texto
let almacenCadenas = new Almacen();
almacenCadenas.agregarElemento("Hola");
almacenCadenas.agregarElemento("Mundo");
almacenCadenas.agregarElemento("TypeScript");
console.log("Almacén de cadenas:");
almacenCadenas.listarElementos();
console.log("Elemento en posición 2:");
console.log(almacenCadenas.obtenerElemento(2));
// Almacén de objetos
let almacenProductos = new Almacen();
almacenProductos.agregarElemento({
    nombre: "Portátil",
    precio: 750
});
almacenProductos.agregarElemento({
    nombre: "Móvil",
    precio: 300
});
console.log("Almacén de productos:");
almacenProductos.listarElementos();
console.log("Producto en posición 0:");
console.log(almacenProductos.obtenerElemento(0));
