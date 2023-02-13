const user = require("../../models/user");
const friendInvitation = require("../../models/friendsInvitation");


const postInvite = async (req,res) =>{
    const {targetEmailAddress} = req.body;

    const {userId, emailAddress} = req.user;
    if(emailAddress.toLowerCase()===targetEmailAddress.toLowerCase()){
        return res.
        status(409).
        send('Sorry, you cannot send request to yourself');
    }

    const targetUser = await user.findOne({
        emailAddress:targetEmailAddress.toLowerCase()
    });
    if(!targetUser){
        return res.status(404).send(`A Person with ${targetEmailAddress} address not found`)
    }

    const inviteAlreadySent = await friendInvitation.findOne({
        senderId:userId,
        receiverId:targetUser._id
    });
    if(inviteAlreadySent){
        return res.status(409).send(`You have already sent invite to  ${targetEmailAddress}`)
    }

    const isUserAlreadyFriend = await targetUser.friends.find(friendsId=>
        friendsId.toString()===userId.toString());

    if(isUserAlreadyFriend){
        return res.status(409).send('Friend is already on FriendList')
    }

    const newInvitation = await friendInvitation.create({
        senderId:userId,
        receiverId:targetUser._id
    });

    return res.status(201).send('Invitation has been sent');
}

module.exports = postInvite;