import React, {useState, useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';
import {connect} from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import {useNavigate} from 'react-router-dom';

const LoginPage = ({login}) => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(()=>{
        setIsFormValid(validateLoginForm({emailAddress,password}))
    }, [emailAddress,password,setIsFormValid]);

    const navigate = useNavigate();

    const handlelogin=()=>{
        const userDetails ={
            emailAddress,password
        }
        
        login(userDetails,navigate)
    }

    return (
        <AuthBox>
            <LoginPageHeader></LoginPageHeader>
            <LoginPageInputs
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            password={password}
            setPassword={setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handlelogin={handlelogin} />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch)
    }
}
export default connect(null,mapActionsToProps)(LoginPage);