import React from 'react';
import Typography from '@mui/material/Typography';

const LoginPageHeader = () => {
    return (
        <>
        <Typography variant='h5' sx={{color:'white'}}> Welcome!</Typography>
        <Typography sx={{color:'#b9bbbe'}}> we are happy to have you back!</Typography>
        </>
    );
};

export default LoginPageHeader;