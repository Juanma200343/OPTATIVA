
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para registrar las peticiones
app.use((req, res, next) => {
    const hora = new Date().toLocaleTimeString();
    console.log(`${hora} ${req.method} ${req.url}`);
    next();
});

// Servir archivos estáticos
app.use(express.static('public'));

// Ruta de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// Ruta de horario
app.get('/horario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/horario.html'));
});

// Página de error 404
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, 'public/views/404.html')
    );
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
