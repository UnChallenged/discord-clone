import * as api from '../../api';
import { openAlertMessage } from './alertActions';

export const friendsActions = {
    SET_FRIENDS:'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS:'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS:'FRIENDS.SET_ONLINE_USERS'
}

export const getActions = (dispatch) =>{
    return {
        sendFriendInvitation: (data,closeDialogHandler) => 
        dispatch(sendFriendInvitation(data,closeDialogHandler)),

        acceptFriendInvitation:(data) =>dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation:(data) =>dispatch(rejectFriendInvitation(data)),

    }
}



export const setPendingFriendsInvitation = (pendingFriendsInvitations) =>{
    return{
        type:friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations
    }
}

const sendFriendInvitation = (data,closeDialogHandler) => {
    return async (dispatch) =>{
        const response = await api.sendFriendInvitation(data);
        
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data));
        }
        else
        {
            dispatch(openAlertMessage('Invitation has been sent!'));
            closeDialogHandler();
        }
    }
}

const acceptFriendInvitation = (data)=>{
    return async (dispatch) =>{
        const response = await api.acceptFriendInvitation(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data));
        }
        else
        {
            dispatch(openAlertMessage('Invitation Accepted!'));
        }
    }
}

const rejectFriendInvitation = (data)=>{
    return async (dispatch) =>{
        const response = await api.rejectFriendInvitation(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data));
        }
        else
        {
            dispatch(openAlertMessage('Invitation Rejected!'));
        }
    }
}