const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
 const hora = new Date().toLocaleTimeString()
 console.log(`${hora} ${req.method} ${req.url}`)
 next() // ¡pasa a lo siguiente!
})


app.get('/', (req, res) => res.send('Inicio'))

app.get('/horario',(req,res) => res.send('Horario'))

// 404: SIEMPRE la última
app.use((req, res) => {
 res.status(404).send('<h1>Página no encontrada</h1>')
})
app.listen(PORT, () => console.log(`En el puerto ${PORT}`))
