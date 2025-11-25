const express = require('express');
const router = express.Router();
const db = require('../db'); // CONEXIÓN BD

// MIDDLEWARE DE SEGURIDAD
function requireLogin(req, res, next) {
    // VERIFICAR SESIÓN ACTIVA
    if (req.session.loggedin) {
        next();
    } else {
        res.redirect('/login/login');
    }
}

// RUTA INICIO 
router.get('/inicio', requireLogin, (req, res) => {
    const sql = 'SELECT * FROM users';
    
    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.send("Error al traer usuarios");
        }
        res.render('index', {
            name: req.session.name,
            users: results
        }); // RENDERIZAR TABLA EJS
    });
});

// RUTA AÑADIR 
router.post('/add', requireLogin, (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users SET ?';
    
    db.query(sql, { name, email }, (err) => {
        if (err) console.log(err);
        res.redirect('/inicio');
    });
});

// RUTA EDITAR 
router.get('/edit/:id', requireLogin, (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM users WHERE id = ?';
    
    db.query(sql, [id], (err, results) => {
        if (err) console.log(err);
        res.render('edit', { user: results[0] }); // RENDERIZAR FORMULARIO
    });
});

// RUTA ACTUALIZAR 
router.post('/update/:id', requireLogin, (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    
    db.query(sql, [name, email, id], (err) => {
        if (err) console.log(err);
        res.redirect('/inicio');
    });
});

// RUTA ELIMINAR 
router.get('/delete/:id', requireLogin, (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM users WHERE id = ?';
    
    db.query(sql, [id], (err) => {
        if (err) console.log(err);
        res.redirect('/inicio');
    });
});

module.exports = router; // EXPORTAR RUTAS