const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const bodyParser = require('body-parser');
const votesRoute = require('./routes/votes-routes');

require('./database');
require('./sockets')(io);



// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARE 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/", require("./routes/user-routes"));

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'dashboard.html'));
})
//obtener votos para el dashboard
app.use('/api', votesRoute);



// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

// SERVER STARTS
server.listen(4000, () => {
    console.log('====================================');
    console.log('Server on port http://192.168.0.100:4000/', app.get('port'));
    console.log('====================================');
});


io.on('connection', socket => {
    socket.on('logout', () => {
        console.log('Sesion cerrada')
        // Realiza las acciones necesarias para cerrar la sesión del usuario
    });
});