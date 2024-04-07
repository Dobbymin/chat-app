const app = require('./app');
const { Server } = require('socket.io');
const { createServer } = require('http');

require('dotenv').config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
    },
});

require('./utils/io')(io);

httpServer.listen(process.env.PORT, () => {
    console.log('server listening on port', process.env.PORT);
});
