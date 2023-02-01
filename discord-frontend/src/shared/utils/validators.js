export const validateLoginForm = ({email, password}) =>{
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    return isEmailValid && isPasswordValid;
}
const validatePassword = (password) =>{
    return password.length > 6 && password.length < 12;
}

const validateEmail = (email) =>{
    return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
}