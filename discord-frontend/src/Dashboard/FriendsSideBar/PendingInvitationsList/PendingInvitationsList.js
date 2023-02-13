import React from 'react';
import { styled } from '@mui/system';
import PendingInvitationsListItems from './PendingInvitationsListItems';

const dummy_invitations =[{
    _id:'1',
    senderId:{
        username:'Mark',
        emailAddress:'dummy@code.com'
    }
},
{
    _id:'2',
    senderId:{
        username:'David',
        emailAddress:'dummy@code.com'
    }
}
]

const MainContainer = styled('div')({
    height:'22%',
    width: '100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})

const PendingInvitationsList = () => {
    return (
        <MainContainer>
            {dummy_invitations.map((i)=>(
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

export default PendingInvitationsList;