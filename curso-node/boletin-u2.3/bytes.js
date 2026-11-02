
const texto = process.argv.slice(2).join(" ");

const buffer = Buffer.from(texto);

console.log("Texto:", texto);
console.log("Caracteres:", texto.length);
console.log("Bytes:", Buffer.byteLength(texto, "utf8"));
console.log("Contenido como buffer:", buffer);

const abecedario = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abecedario[i] = 65 + i;
}

console.log("Abecedario como buffer:", abecedario);
console.log("Abecedario:", abecedario.toString());
