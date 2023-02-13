import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar'
import { logout } from '../shared/utils/auth';
import {connect} from 'react-redux';
import { getActions } from '../store/actions/authActions';
import { Navigate } from "react-router-dom";

const Wrapper = styled('div')({
    width:'100%',
    height:'100vh',
    display:'flex',
})

const Dashboard = ({setUserDetails}) => {
    
    const userDetails = localStorage.getItem('user');
    useEffect(()=>{
        
        if(!userDetails){
            logout();
        }
        else{
            setUserDetails(JSON.parse(userDetails));
        }
    });
    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </Wrapper>
    );
};

const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(Dashboard);