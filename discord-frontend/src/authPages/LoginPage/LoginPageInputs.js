import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';
const LoginPageInputs = ({email,setEmail,password,setPassword}) => {
    return (
        <>
           <InputWithLabel
           value={email}
           setValue={setEmail}
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