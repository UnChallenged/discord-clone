import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';
const LoginPageInputs = ({emailAddress,setEmailAddress,password,setPassword}) => {
    return (
        <>
           <InputWithLabel
           value={emailAddress}
           setValue={setEmailAddress}
           label='Email'
           type='text'
           placeholder = 'Enter Email'
           /> 
           <InputWithLabel
           value={password}
           setValue={setPassword}
           label='Password'
           type='password'
           placeholder = 'Enter Password'
           /> 
        </>
    );
};

export default LoginPageInputs;