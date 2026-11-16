
const express = require('express');
const app = express();
const path = require('path');


const libros = [
    {
        titulo: 'El Quijote',
        autor: 'Miguel de Cervantes',
        anio: 1605,
        disponible: true
    },
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        anio: 1967,
        disponible: false
    },
    {
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        anio: 2001,
        disponible: true
    },
    {
        titulo: 'Clean Code',
        autor: 'Robert C. Martin',
        anio: 2008,
        disponible: false
    },
    {
        titulo: 'El nombre del viento',
        autor: 'Patrick Rothfuss',
        anio: 2007,
        disponible: true
    }
];


// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware de registro
app.use((req, res, next) => {
    const hora = new Date().toLocaleTimeString();
    console.log(`${hora} ${req.method} ${req.url}`);
    next();
});

// Página de inicio
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Inicio'
    });
});

// Página de horario
app.get('/horario', (req, res) => {
    const horario = [
        { dia: 'Lunes', horas: '8:30 - 14:30' },
        { dia: 'Martes', horas: '8:30 - 14:30' },
        { dia: 'Miércoles', horas: '8:30 - 14:30' },
        { dia: 'Jueves', horas: '8:30 - 14:30 y 16:00 - 19:00' },
        { dia: 'Viernes', horas: '8:30 - 13:30' }
    ];

    res.render('horario', {
        titulo: 'Horario',
        horario: horario
    });
});



// Mostrar todos los libros
app.get('/libros', (req, res) => {
    res.render('libros', {
        titulo: 'Catálogo de libros',
        libros: libros
    });
});

// Mostrar solamente los libros disponibles
app.get('/libros/disponibles', (req, res) => {
    const disponibles = libros.filter(libro => libro.disponible);

    res.render('libros', {
        titulo: 'Libros disponibles',
        libros: disponibles
    });
});


// Página 404
app.use((req, res) => {
    res.status(404).render('404', {
        titulo: 'Página no encontrada'
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor funcionando en http://localhost:3000');
});
