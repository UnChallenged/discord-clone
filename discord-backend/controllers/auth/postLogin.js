const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');




const postLogin = async (req,res) =>{
    try {
        const {emailAddress,password}=req.body;
        const user = await User.findOne({emailAddress:emailAddress.toLowerCase()});

        if(user && (await bcrypt.compare(password, user.password))){
            
            const token = jwt.sign({
                userId: user._id,
                emailAddress,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn:"24h",
            }
            );
            return res.status(200).json({
                userDetails:{
                    emailAddress:user.emailAddress,
                    token:token,
                    username: user.username
                }
            });
            
        }
        return res.status(400).send("Invalid login details");
    } catch (error) {
        return res.status(500).send("Some Error occured");
    }
};

module.exports = postLogin;