const ServerStore = require("../ServerStore");

const newConnectionHandler = async(socket,io) =>{
    const userDetails = socket.user;
    ServerStore.addNewConnectedUser({
        socketId:socket.id,
        userId:userDetails.userId,
    });
}

module.exports = newConnectionHandler;