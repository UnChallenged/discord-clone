import React from 'react';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { connect} from 'react-redux';  
import { getActions } from '../../store/actions/alertActions';

const AlertNotification = ({
    showAlertMessage,
    hideAlertMessage,
    alertMessageText
}) => {
    return (
        <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'center'}}
        open={showAlertMessage}
        onClose={hideAlertMessage}
        autoHideDuration={6000}
        >
            <Alert severity='info'>{alertMessageText}</Alert>
        </Snackbar>
    );
};

const mapStoreStateToProps = ({alert}) => {
    return {
        ...alert
    }
}

const mapActionsToProps = (dispatch) =>{
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps,mapActionsToProps)(AlertNotification);