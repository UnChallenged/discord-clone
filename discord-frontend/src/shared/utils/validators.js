export const validateLoginForm = ({emailAddress, password}) =>{
    const isEmailValid = validateEmail(emailAddress);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
}
export const validateRegisterForm = ({emailAddress,username,password}) =>{
    return (validateEmail(emailAddress) &&
    validatePassword(password) &&
    validateUsername(username));
}
const validateUsername = (username) =>{
    return username.length > 3 && username.length < 13;
}

const validatePassword = (password) =>{
    return password.length > 6 && password.length < 12;
}

const validateEmail = (emailAddress) =>{
    return emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}