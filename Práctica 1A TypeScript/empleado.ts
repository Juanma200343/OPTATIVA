
class Employee {
    private nombre: string;
    private apellido: string;
    private edad: number;
    private fechaInicio: Date;
    private fechaFin: Date | null;
    private profesion: string;

    // Constructor
    constructor(
        nombre: string,
        apellido: string,
        edad: number,
        fechaInicio: Date,
        fechaFin: Date | null,
        profesion: string
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesion = profesion;
    }

    // Get y set del nombre
    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // Get y set del apellido
    getApellido(): string {
        return this.apellido;
    }

    setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    // Get y set de la edad
    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    // Get y set de la fecha de inicio
    getFechaInicio(): Date {
        return this.fechaInicio;
    }

    setFechaInicio(fechaInicio: Date): void {
        this.fechaInicio = fechaInicio;
    }

    // Get y set de la fecha de finalización
    getFechaFin(): Date | null {
        return this.fechaFin;
    }

    setFechaFin(fechaFin: Date | null): void {
        this.fechaFin = fechaFin;
    }

    // Get y set de la profesión
    getProfesion(): string {
        return this.profesion;
    }

    setProfesion(profesion: string): void {
        this.profesion = profesion;
    }
}

// Creamos dos empleados
let empleado1 = new Employee(
    "Juan",
    "García",
    35,
    new Date("2018-03-15"),
    new Date("2023-06-30"),
    "Programador"
);

let empleado2 = new Employee(
    "María",
    "López",
    28,
    new Date("2022-09-01"),
    null,
    "Diseñadora"
);

// Mostramos el nombre y la edad por consola
console.log("Nombre: " + empleado1.getNombre());
console.log("Edad: " + empleado1.getEdad());

console.log("Nombre: " + empleado2.getNombre());
console.log("Edad: " + empleado2.getEdad());
