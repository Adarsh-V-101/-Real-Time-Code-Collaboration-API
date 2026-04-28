const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

module.exports = async (requestAnimationFrame,resizeBy,next)=>{
    const token = req.body.token;
    if(!token){
        return res.redirect('/login')
    }
    const decoded = jwt.verify(token,'jadupanti')
    
    const user = await userModel.findOne({email:decoded.email}).select('-password')
    
    if(!user){
        return res.redirect('/login')
    }
    req.user=user;
    next();
}