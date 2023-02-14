const friendsInvitation = require("../../models/friendsInvitation");
const friendsUpdates = require('../../socketHandlers/updates/friends')
const postReject = async (req,res) =>{
    try {
        
        const {id} = req.body;
        const {userId} = req.user;

        const invitationExist = await friendsInvitation.exists({_id:id});

        if(invitationExist){
            await friendsInvitation.findByIdAndDelete(id);
        }

        friendsUpdates.updateFriendsPendingInvitations(userId);

        return res.status(200).send('Invitation successfully Rejected');

    } catch (error) {
        console.log(error);
        return res.status(500).send('something went wrong in reject')
    }

}


module.exports = postReject;