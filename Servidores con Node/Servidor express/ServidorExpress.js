const express = require('express');
const app = express();
const PORT = 3002;
// Se define la ruta principal
app.get('/', (req, res) => {

  res.send('Servidor de node con express Pineda Guerrero Diego Emiliano');
});

app.listen(PORT, () => {
  console.log(`Servidor Express (texto) corriendo en http://localhost:${PORT}`);
});