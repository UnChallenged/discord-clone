import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMsg = () =>{
    return 'Enter Correct email and password'
}

const getFormValidmsg = () =>{
    return 'Press to log in'
}

const LoginPageFooter = ({handlelogin, isFormValid}) => {
    const navigate = useNavigate();
    const handlePushToRegisterPage = () => {
    navigate('/register')
}

    return (
        <>
        <Tooltip title={!isFormValid ? getFormNotValidMsg() : getFormValidmsg()}>
        <div>
            <CustomPrimaryButton
            lable='Log in'
            additionalStyles={{marginTop:'30px'}}
            disabled={!isFormValid}
            onClick={handlelogin}
            />
        </div>
        </Tooltip>
        <RedirectInfo
        text='Need an account?'
        redirectText='Create an account'
        additionalStyles={{marginTop: '5px'}}
        redirectHandler={handlePushToRegisterPage}
        />
</>
    );
};

export default LoginPageFooter;