import React from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMsg = () =>{
    return 'Enter Correct username, email and password'
}

const getFormValidmsg = () =>{
    return 'Press to Register'
}

const RegisterPageFooter = ({handleregister, isFormValid}) => {
    const navigate = useNavigate();
    const handlePushToLoginPage = () => {
    navigate('/login')
}
    return (
        <>
        <Tooltip title={!isFormValid ? getFormNotValidMsg() : getFormValidmsg()}>
        <div>
            <CustomPrimaryButton
            lable='Register'
            additionalStyles={{marginTop:'30px'}}
            disabled={!isFormValid}
            onClick={handleregister}
            />
        </div>
        </Tooltip>
        <RedirectInfo
        text=''
        redirectText='Already have an account ?'
        additionalStyles={{marginTop: '5px'}}
        redirectHandler={handlePushToLoginPage}
        />
</>
    );
};

export default RegisterPageFooter;