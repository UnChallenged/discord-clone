const connectedUsers = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) =>{
    io = ioInstance;
}

const getSocketServerInstance = () =>{
    return io;
}

const addNewConnectedUser = ({socketId, userId}) =>{
    connectedUsers.set(socketId,{userId});
    //("new connected user");
    //console.log(connectedUsers);
}

const removeConnectedUser = (socketId) =>{
    if(connectedUsers.has(socketId)){
        connectedUsers.delete(socketId);
    }
    //console.log("new connected user");
    //console.log(connectedUsers);
}

const getOnlineConnections = (userId) =>{
    const onlineConnection = [];
    connectedUsers.forEach(function(value,key){
        if(value.userId===userId)
        onlineConnection.push(key);

    });
    return onlineConnection
}

const getOnlineUsers = () =>{
    const onlineUsers =[];
    connectedUsers.forEach((value,key)=>{
        onlineUsers.push({socketId:key,userId:value.userId})
    });

    return onlineUsers;
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
    getOnlineConnections,
    getSocketServerInstance,
    setSocketServerInstance,
    getOnlineUsers
}