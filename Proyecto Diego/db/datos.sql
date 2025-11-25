CREATE DATABASE node_diego;
USE node_diego;
CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (100),
    email VARCHAR(100)
);

USE node_diego;

/* Tabla específica para el Login y Registro */
CREATE TABLE login(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);