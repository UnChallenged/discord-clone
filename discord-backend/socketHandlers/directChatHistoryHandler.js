const Conversation = require("../models/conversation");
const chatUpdates = require("./updates/chat");

const directChatHistoryHandler = async(socket,data)=>{
    try {

        const {userId} = socket.user;
        const {receiveruserId} = data;

        const conversation = await Conversation.findOne({
            participant:{$all:[userId,receiveruserId]},
            type:'DIRECT'
        });
        if(conversation){
            chatUpdates.updateChatHistory(conversation._id.toString(),socket.id);
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = directChatHistoryHandler;