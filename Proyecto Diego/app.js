const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session'); 

// Importamos las rutas separadas
const authRoutes = require('./rutas/login'); 
const crudRoutes = require('./rutas/registro'); 

const app = express(); // INICIALIZACIÓN DE EXPRESS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs'); // MOTOR DE PLANTILLAS
app.use(express.static('public')); // CARPETA PÚBLICA
app.use(session({
    secret: 'clave_secreta_super_segura',
    resave: true,
    saveUninitialized: true
}));


// RUTA RAÍZ
app.get('/', (req, res) => {
    res.redirect('/login/login');
});

// USO DE RUTAS
app.use('/login', authRoutes);
app.use('/', crudRoutes);
// INICIAR SERVIDOR
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
}); 