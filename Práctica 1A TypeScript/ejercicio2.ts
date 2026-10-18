
function contarPalabras(cadena: string): number {
    let palabras = cadena.trim();

    if (palabras === "") {
        return 0;
    }

    return palabras.split(/\s+/).length;
}

// Probamos la función contarPalabras
console.log(contarPalabras("Hola mundo"));
console.log(contarPalabras("Iron Man es un superhéroe"));
console.log(contarPalabras("   Thor   es   fuerte   "));
console.log(contarPalabras(""));


function getAvenger(
    nombre: string,
    poderOp?: string,
    arma: string = "arco"
): string {
    if (poderOp) {
        return `${nombre} tiene el poder de ${poderOp} y utiliza un ${arma}.`;
    } else {
        return `${nombre} no tiene un poder especificado y utiliza un ${arma}.`;
    }
}

// Probamos la función getAvenger
console.log(getAvenger("Ojo de Halcón"));
console.log(getAvenger("Thor", "controlar el trueno", "martillo"));
console.log(getAvenger("Iron Man", "tecnología avanzada", "armadura"));
console.log(getAvenger("Viuda Negra", undefined, "pistolas"));
