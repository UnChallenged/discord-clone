const alertActions = {
    OPEN_ALERT_MESSAGE:"ALERT.OPEN_ALERT_MESSAGE",
    HIDE_ALERT_MESSAGE:"ALERT.HIDE_ALERT_MESSAGE"
}

export const getActions = (dispatch) =>{
    return {
        openAlertMessage: (content) => dispatch(openAlertMessage(content)),
        hideAlertMessage: () =>dispatch(hideAlertMessage()),
    }
}

export const openAlertMessage = (content) =>{
    return {
        type:alertActions.OPEN_ALERT_MESSAGE,
        content
    }
}

export const hideAlertMessage = () => {
    return {
        type:alertActions.HIDE_ALERT_MESSAGE,
    }
}

export default alertActions;