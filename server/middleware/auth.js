const jwt=require('jsonwebtoken');
const Mentor=require("../models/Mentor");
const auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];//Beared token
    if(!token) return res.status(401).json({
        message:'Unathorized'
    });
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.stats(401).json({
            message:'Invalid token'
        });
    }
}
module.exports=auth;