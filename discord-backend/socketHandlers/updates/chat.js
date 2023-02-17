const Conversation = require('../../models/conversation')
const serverStore = require('../../ServerStore')


const updateChatHistory = async (ConversationId,SpecifiedSocketId=null)=>{
    const conversation = await Conversation.findById(ConversationId).populate({
        path:'messages',
        model:'Message',
        populate:{
            path:'author',
            model:'User',
            select:'username _id'
        }
    });
    if(conversation){
        const io = serverStore.getSocketServerInstance();
    
    if(SpecifiedSocketId){
        return io.to(SpecifiedSocketId).emit('direct-chat-history',{
            messages:conversation.messages,
            participant:conversation.participant
        })
    }

    conversation.participant.forEach(userId=>{
        const activeConnections = serverStore.getOnlineConnections(userId.toString());
        activeConnections.forEach(socketId=>{
            io.to(socketId).emit('direct-chat-history',{
                messages:conversation.messages,
                participant:conversation.participant
            });
        });
    });
}
}

module.exports = {updateChatHistory};