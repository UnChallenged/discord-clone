const authSocket = require('./middleware/authSocket');
const disconnectHandler = require('./socketHandlers/disconnectHandler');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');

const registerSocketServer = (server) =>{
    const io=require('socket.io')(server,{
        cors:{
            orgin:'*',
            method:['GET','POST'],
        }
    });
    io.use((socket,next) =>{
        authSocket(socket,next);
    })
    io.on('connection',(socket)=>{
        console.log('user Connected');
        console.log(socket.id);
        
        newConnectionHandler(socket,io);

        socket.on('disconnect', ()=>{
            disconnectHandler(socket);
        })
    });
}

module.exports = {
    registerSocketServer
}