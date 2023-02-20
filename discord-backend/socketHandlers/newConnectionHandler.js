const ServerStore = require("../ServerStore");
const friendsUpdate = require('../socketHandlers/updates/friends');
const roomsUpdate = require("./updates/rooms");

const newConnectionHandler = async(socket,io) =>{
    const userDetails = socket.user;

    ServerStore.addNewConnectedUser({
        socketId:socket.id,
        userId:userDetails.userId,
    });

    friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);
    friendsUpdate.updateFriends(userDetails.userId);
    roomsUpdate.updateRooms(socket.id);
    // setTimeout(() => {
    //     roomsUpdate.updateRooms(socket.id);
    //   }, [500]);
}

module.exports = newConnectionHandler;