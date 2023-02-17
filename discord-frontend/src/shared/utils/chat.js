import store from "../../store/store";
import { setMessages } from "../../store/actions/chatAction";

export const updateDirectChatHistoryIfActive =(data)=>{
    const {participant, messages} = data;

    const receiverId = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails._id;

    if(receiverId && userId){
        const usersInConversation = [receiverId, userId];

        updateChatHistoryIfSameConversationActive({
            participant,
            usersInConversation,
            messages,
        })

    }
}
const updateChatHistoryIfSameConversationActive = ({
    participant,
    usersInConversation,
    messages,
}) =>{
    const result = participant.every(function(participantId){
        return usersInConversation.includes(participantId)
    });
    if(result){
        store.dispatch(setMessages(messages));
    }
}