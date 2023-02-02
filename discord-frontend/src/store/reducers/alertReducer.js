import alertActions from "../actions/alertActions";


const initState = {
    showAlertMessage:false,
    alertMessageText:null
};

const reducer = (state=initState, action) => {
    switch(action.type){
        case alertActions.OPEN_ALERT_MESSAGE:
            return{
                ...state,
                showAlertMessage:true,
                alertMessageText: action.content,

            };
        case alertActions.HIDE_ALERT_MESSAGE:
            return{
                ...state,
                showAlertMessage:false,
                alertMessageText:null
            };
        default:
            return state;

    };
}
export default reducer;