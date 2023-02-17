const friendsInvitation = require("../../models/friendsInvitation");
const user = require("../../models/user");
const friendsUpdates = require('../../socketHandlers/updates/friends')

const postAccept = async (req,res) =>{
    try {
        
        const {id} = req.body;
        const {userId} = req.user;

        const invitation = await friendsInvitation.findById(id);
        if(!invitation)
        {
            return res.status(401).send('Invite does not found, please try again');
        }

        const {senderId, receiverId} = invitation;
        const senderUser = await user.findById(senderId);
        senderUser.friends = [...senderUser.friends,receiverId];

        const ReceiverUser = await user.findById(receiverId);
        ReceiverUser.friends = [...ReceiverUser.friends,senderId];

        await senderUser.save();
        await ReceiverUser.save();

        await friendsInvitation.findByIdAndDelete(id);
        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(receiverId.toString());
        friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());

        return res.status(200).send('Friend successfully added')

    } catch (error) {
        console.log(error);
        return res.status(500).send('something went wrong in accept invite');
    }

}


module.exports = postAccept;