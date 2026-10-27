const os = require("os")
const path = require("path")
const fs =  require("fs")
const crypto = require("crypto")

const ruta = path.join(__dirname,ficha.txt)
const texto = "Usuario: ${path}" + fs;

fs.writeFileSync(ruta,texto)

console.log(fs.readFileSync(ruta))

