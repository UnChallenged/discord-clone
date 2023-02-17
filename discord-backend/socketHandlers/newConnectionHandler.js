const ServerStore = require("../ServerStore");
const friendsUpdate = require('../socketHandlers/updates/friends');

const newConnectionHandler = async(socket,io) =>{
    const userDetails = socket.user;

    ServerStore.addNewConnectedUser({
        socketId:socket.id,
        userId:userDetails.userId,
    });

    friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);
    friendsUpdate.updateFriends(userDetails.userId);
}

module.exports = newConnectionHandler;