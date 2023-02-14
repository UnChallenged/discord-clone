const User = require('../../models/user');
const friendInvitation = require('../../models/friendsInvitation');
const serverStore = require('../../ServerStore');

const updateFriendsPendingInvitations = async (userId) =>{
    try {
        const pendingInvitations = await friendInvitation.find({
            receiverId: userId
        }).populate('senderId','_id username emailAddress');

        const receiverList = serverStore.getOnlineConnections(userId);
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach(receiverSocketId =>{
            io.to(receiverSocketId).emit('friends-invitations',{
                pendingInvitations:pendingInvitations?pendingInvitations:[]
            })
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {updateFriendsPendingInvitations};