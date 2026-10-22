const fs = require('fs/promises')
async function unir(){
try{
const a = await fs.readFile('a.txt' , 'utf8')
const b = await fs.readFile('b.txt', 'utf8')
const c = await fs.readFile('c.txt', 'utf8')
const texto = await fs.readFile('todo.txt', texto)
await fs.writeFile  ('todo.txt creado correctamente')

}catch (err){
    console.error('Error: ', err.message)
}

}
unir()