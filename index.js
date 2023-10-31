const http = require('node:http');
//recupera la APP de Express
const app = require('./src/app');
// leemos el fichero de entorno .env
require('dotenv').config();
//Configuro base de datos
require('./src/config/db');

//Creamos el servidor
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
});
server.on('error', (error) => {
    console.log(error)
});