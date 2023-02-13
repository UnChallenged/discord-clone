import { Box, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButton from './InvitationDecisionButton';

const PendingInvitationsListItems = ({
    id,
    username,
    emailAddress,
    acceptFriendInvitation=() =>{},
    rejectFriendInvitation=() =>{},
}) => {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const handleAcceptInvitation = () =>{
        acceptFriendInvitation({id:id});
        setButtonDisabled(true);
    }

    const handleRejectInvitation = () =>{
        rejectFriendInvitation({id:id});
        setButtonDisabled(true);
    }

    return (
        <Tooltip title={emailAddress}>
            <div style={{width:'100%'}}>
                <Box
                sx={{
                    width:'100%',
                    height:'42px',
                    marginTop:'10px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}
                >
                <Avatar username={username} />
                <Typography
                sx={{
                    marginLeft:'7px',
                    fontWeight:700,
                    color:'#8e9297',
                    flexGrow:1
                }} variant='subtitle1' align='left'
                >{username}</Typography>
                                <InvitationDecisionButton
                disable={buttonDisabled}
                acceptFriendInvitation={handleAcceptInvitation}
                rejectFriendInvitation={handleRejectInvitation}
                />
                </Box>
            </div>
        </Tooltip>
    );
};

export default PendingInvitationsListItems;