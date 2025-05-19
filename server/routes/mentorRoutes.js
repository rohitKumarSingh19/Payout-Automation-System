const express=require('express');
const router=express.Router();
const {auth,authorizeRoles}=require('../middleware/auth');
router.get('/dashboard',auth,authorizeRoles('mentor'),(req,res)=>{
    res.json({message:'Welcome to Mentor Dashboard'});
})
module.exports=router;