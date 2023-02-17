import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Avatar from '../../../shared/components/Avatar';

const MainContainer=styled('div')({
    width:'97%',
    display:'flex',
    marginTop:'10px',

});
const AvatarContainer = styled('div')({
    width:'70px'
})
const MessageContainer = styled('div')({
    display:'flex',
    flexDirection:'column'
})

const MessageContent = styled('div')({
    color:'#DCDDDE'
})
const SameAurthorMessageContent = styled('div')({
    color:'#DCDDDE',
    width:'97%'
})
const SameAurthorMessageText = styled('span')({
    marginLeft:'70px'
})
const Message = ({content, sameAuthor, username, date, sameDay}) => {
    if(sameAuthor && sameDay){
        return(
            <SameAurthorMessageContent>
                <SameAurthorMessageText>{content}</SameAurthorMessageText>
            </SameAurthorMessageContent>
        )
    }
    return (
        <MainContainer>
            <AvatarContainer>
                <Avatar username={username} />
            </AvatarContainer>
            <MessageContainer>
                <Typography style={{fontSize:'16px',color:'white'}}>
                    {username}{' '}
                    <span style={{fontSize:'12px', color:'#72767d'}}>
                        {date}
                    </span>
                </Typography>
                <MessageContent>{content}</MessageContent>
            </MessageContainer>
        </MainContainer>
    );
};

export default Message;