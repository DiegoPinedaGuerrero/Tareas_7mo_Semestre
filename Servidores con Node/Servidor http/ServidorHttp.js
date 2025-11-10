const http = require('http');// Usamos el módulo http que viene nativo en Node
const PORT = 3002;
// Se crea el servidor 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Primera Tarea De Node Pineda Guerrero Diego Emiliano');
});
server.listen(PORT, () => {
  console.log(`Servidor HTTP nativo corriendo en http://localhost:${PORT}`);
});