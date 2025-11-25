const mysql = require('mysql2'); // MÓDULO MYSQL

// CREAR OBJETO DE CONEXIÓN
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_diego',
    port: '3306'
});

// ESTABLECER CONEXIÓN Y LOG
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la BD:', error);
        return;
    }
    console.log('Conexión a la BD exitosa');
});

module.exports = connection; // EXPORTAR CONEXIÓN