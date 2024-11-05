const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const UserModel=require("../models/user");
const { SiJsonwebtokens } = require('react-icons/si');

const signup= async(req,res)=> {
    try {
        const{name,email,password}= req.body;
        const user= await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message: 'user is already exist,you can login ',success: false});
        }
        const userModel=new UserModel({name,email,password});
        userModel.password= await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
         .json({
            message:"signup  successfully",
            success: true
    })
    } catch (err) {
        res.status(500)
         .json({
            message:"internal server error",
            success: false
    })
        
    }
}
const login= async(req,res)=> {
    try {
        const{email,password}= req.body;
        const user= await UserModel.findOne({email});
        const errorMsg ='auth failed email or password is wrong';
        if(!user){
            return res.status(403)
            .json({message: errorMsg,success: false});
        }
        const ispassEqual= await bcrypt.compare(password, user.password);
        if(!ispassEqual){
            return res.status(403)
            .json({message: errorMsg,success: false});
        }
        const jwtToke = jwt.sign({
            email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24hr'}

        )
        res.status(200)
         .json({
            message:"login  success",
            success: true
    })
    } catch (err) {
        res.status(500)
         .json({
            message:"internal server error",
            success: false,
            jwtToken,
            email,
            name: user.name
    })
        
    }
}

module.exports={
    signup,
    login
}