const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../db'); // CONEXIÓN BD

// GESTIÓN DE VISTAS Y AUTENTICACIÓN
router.get('/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/inicio');
    } else {
        res.sendFile(path.join(__dirname, '../public/login.html'));
    }
});

router.get('/register', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/inicio');
    } else {
        res.sendFile(path.join(__dirname, '../public/registro.html'));
    }
});

// REGISTRO DE USUARIOS
router.post('/registro', (req, res) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) return res.send('Faltan datos');

    const query = 'INSERT INTO login SET ?';
    db.query(query, {username, email, password}, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al registrar (quizás el correo ya existe)');
        }
        res.redirect('/login/login');
    });
});

// INICIO DE SESIÓN
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM login WHERE username = ? AND password = ?';
    
    db.query(query, [username, password], (err, results) => {
        if (err) return res.send('Error de servidor');

        if (results.length > 0) {
            req.session.loggedin = true;
            req.session.name = username;

            console.log(`Sesión iniciada para: ${username}`);
            res.redirect('/inicio');
        } else {
            res.send('Usuario o contraseña incorrectos');
        }
    });
});

// CIERRE DE SESIÓN
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login/login');
    });
});

module.exports = router; // EXPORTAR RUTAS