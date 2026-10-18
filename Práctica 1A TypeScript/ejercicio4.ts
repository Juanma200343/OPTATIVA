
class Animal {
    private nombre: string;
    private edad: number;
    private tipo: string;

    // Constructor
    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    // Getters y setters
    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    // Método general
    hacerRuido(): void {
        console.log("El animal hace un ruido.");
    }
}


//Perro extiende de Animal
class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }

    getRaza(): string {
        return this.raza;
    }

    setRaza(raza: string): void {
        this.raza = raza;
    }

    // Método propio del perro
    ladrar(): void {
        console.log(this.getNombre() + " está ladrando: ¡Guau, guau!");
    }

    // Sobrescribimos el método del padre
    hacerRuido(): void {
        console.log("¡Guau, guau!");
    }
}


//Pajaro extiende de Animal
class Pajaro extends Animal {
    private puedeVolar: boolean;

    constructor(nombre: string, edad: number, puedeVolar: boolean) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }

    getPuedeVolar(): boolean {
        return this.puedeVolar;
    }

    setPuedeVolar(puedeVolar: boolean): void {
        this.puedeVolar = puedeVolar;
    }

    // Método propio del pájaro
    volar(): void {
        if (this.puedeVolar) {
            console.log(this.getNombre() + " está volando.");
        } else {
            console.log(this.getNombre() + " no puede volar.");
        }
    }

    // Sobrescribimos el método heredado
    hacerRuido(): void {
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
