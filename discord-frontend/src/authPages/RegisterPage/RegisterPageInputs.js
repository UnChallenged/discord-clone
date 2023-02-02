import React from 'react';
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = (props) => {
    const {emailAddress, setEmailAddress, username, setUsername, password, setPassword} = props;
    return (
        <>
            <InputWithLabel
            value={emailAddress}
            setValue={setEmailAddress}
            label='Email'
            type='text'
            placeholder='Enter Email address'
            />
            <InputWithLabel
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter Username'
            />
            <InputWithLabel
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter Password'
            />
        </>
    );
};

export default RegisterPageInputs;