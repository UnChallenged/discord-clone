const ServerStore = require('../ServerStore');

const disconnectHandler = (socket) =>{
    ServerStore.removeConnectedUser(socket.id);
}

module.exports = disconnectHandler;