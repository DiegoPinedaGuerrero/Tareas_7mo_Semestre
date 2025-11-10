const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;
//Se define la ruta
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServidorHtml.html'));
});
app.listen(PORT, () => {
  console.log(`Servidor Express (HTML) corriendo en http://localhost:${PORT}`);
});