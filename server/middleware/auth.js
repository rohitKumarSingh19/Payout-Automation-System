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
        res.status(401).json({
            message:'Invalid token'
        });
    }
}
module.exports=auth;

// const jwt = require('jsonwebtoken');

// // Authentication middleware
// const auth = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // decoded should include role info
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };

// // Role-based authorization middleware
// const authorizeRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: 'Access forbidden: insufficient role' });
//     }
//     next();
//   };
// };

// module.exports = { auth, authorizeRoles };
