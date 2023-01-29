const User = require("../../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req,res) => {
    try{

        const {username,emailAddress,password}=req.body;
        
        const userExists = await User.exists({emailAddress});
        if(userExists){
            return res.status(409).send("Email already exists!");
        }

        const encryptedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            emailAddress:emailAddress.toLowerCase(),
            password:encryptedPassword
        });

        const token = jwt.sign({
            userid: user._id,
            emailAddress,
        },
        process.env.JWT_TOKEN_KEY,
        {
            expiresIn:"24h",
        }
        );

        res.status(201).json({
            userDetails:{
                emailAddress:user.emailAddress,
                token:token,
                username:username
            }
        });

    } catch(err){
        return res.status(500).send("Error Occured.")
    }
};

module.exports = postRegister;