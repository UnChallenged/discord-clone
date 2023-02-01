import React, {useState, useEffect} from 'react';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] =useState(false);

    useEffect(()=>{
        setIsFormValid(validateLoginForm({email,password}))
    }, [email,password,setIsFormValid]);

    const handlelogin=()=>{
        console.log(email)
        console.log(password)
        console.log('log in ');
    }

    return (
        <AuthBox>
            <LoginPageHeader></LoginPageHeader>
            <LoginPageInputs
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handlelogin={handlelogin} />
        </AuthBox>
    );
};

export default LoginPage;