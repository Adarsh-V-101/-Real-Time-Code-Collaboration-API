const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

module.exports = async (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.redirect('/login')
    }
    const decoded = jwt.verify(token,'secretKey')
    
    const user = await userModel.findOne({email:decoded.email}).select('-password')
    
    if(!user){
        return res.redirect('/login')
    }
    req.user=user;
    next();
}