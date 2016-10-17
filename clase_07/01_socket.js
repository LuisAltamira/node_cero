const http = require('http').createServer(server),
fs = require('fs'),
io = require('socket.io')(http);

let conexions = 0;

function server(req, res) {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            return res.end('<h1>Error interno del servidor</h1>');
        } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end(data, 'utf-8');
        }
    });
}

http.listen(3000, () => console.log('servidor corriendo desde el puerto 3000'));

io.on('connection', (socket) => {
    socket.emit('hello', {message: 'Hola mundo con socke.io'});
    socket.on('evento para el servidor', (data) => console.log(data));
});
