import { Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { validateRegisterForm } from '../../shared/utils/validators';
import RegisterPageFooter from './RegisterPageFooter';
import RegisterPageInputs from './RegisterPageInputs';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import {useNavigate} from 'react-router-dom';

const RegisterPage = ({register}) => {
    const navigate = useNavigate();

    const [emailAddress, setEmailAddress] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() =>{
        setIsFormValid(validateRegisterForm({emailAddress,username,password}))

    },[emailAddress,username,password,setIsFormValid])
    const handleRegister= ()=> {
        const userDetails ={
            emailAddress,username,password
        }
        
        register(userDetails,navigate)
    }
    return (
        <AuthBox>
            <Typography variant='h5' sx={{ color: "white"}}>
                Create an account
            </Typography>
            <RegisterPageInputs
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            />
            <RegisterPageFooter
             handleregister={handleRegister} 
             isFormValid={isFormValid}
             />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch)
    }
}

export default connect(null,mapActionsToProps)(RegisterPage);