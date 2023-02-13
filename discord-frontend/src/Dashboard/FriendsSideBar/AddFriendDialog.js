import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../shared/utils/validators';
import { DialogActions } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { Typography } from '@mui/material';
import { DialogTitle } from '@mui/material';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () =>{}
}) => {
    const [emailAddress, setEmailAddress] =useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSendInvitation = () =>{
        sendFriendInvitation({
            targetEmailAddress:emailAddress,
        },
        handleCloseDialog)
    }

    const handleCloseDialog = () =>{
        closeDialogHandler();
        setEmailAddress('');
    }

    useEffect(() =>{
        setIsFormValid(validateEmail(emailAddress));
    },[emailAddress, setEmailAddress]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter Email of friends you would like to invite
                        </Typography>
                    </DialogContentText>
                        <InputWithLabel
                        label='Email'
                        type='text'
                        value={emailAddress}
                        setValue={setEmailAddress}
                        placeholder='Enter Email Address'
                        />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                    onClick={handleSendInvitation}
                    disabled={!isFormValid}
                    lable='Send'
                    additionalStyles={{
                        marginLeft:'15px',
                        marginRight:'15px',
                        marginBottom:'10px'
                    }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};
const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(AddFriendDialog)