const jwt = require('jsonwebtoken');

const config = process.env;

const verifyingTokenSocket = (socket,next) =>{
    const token = socket.handshake.auth?.token;

    try{
        const decoded = jwt.verify(token,config.JWT_TOKEN_KEY);
        socket.user = decoded;
    } catch (err){
        const socketError = new Error('NOT_AUTHORIZED');
        return next(socketError);
    }

    next();
}

module.exports = verifyingTokenSocket;