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

const updateFriends = async (userId) =>{
    try {
        const receiverList = serverStore.getOnlineConnections(userId);
        if(receiverList.length>0)
        {
            const user = await User.findById(userId,{
                _id: 1,
                friends:1
            }).populate('friends','_id username emailAddress isOnline');
    
            if(user)
            {
                const friendsList = user.friends.map(f=>{
                    return{
                        id:f._id,
                        emailAddress:f.emailAddress,
                        username:f.username,
                        isOnline:false
                    }
                });
            const io = serverStore.getSocketServerInstance();
            receiverList.forEach(receiverSocketId =>{
                io.to(receiverSocketId).emit('friends-list',{
                    friends:friendsList?friendsList:[]
                })
            });
        }
    }

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    updateFriendsPendingInvitations,
    updateFriends
};