import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItems from './PendingInvitationsListItems';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    height:'22%',
    width: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})

const PendingInvitationsList = ({pendingFriendsInvitations}) => {
    return (
        <MainContainer>
            {pendingFriendsInvitations.map((i)=>(
                <PendingInvitationsListItems
                key={i._id}
                id={i._id}
                username={i.senderId.username}
                emailAddress={i.senderId.emailAddress}
                />
            ))}
        </MainContainer>
    );
};


const mapStoreStateToProps=({friends}) =>{
    return {
        ...friends
    }
}

export default connect(mapStoreStateToProps)(PendingInvitationsList);