const mongoose=require('mongoose');
const auditLogSchema=new mongoose.Schema({
    action:String,
    actor:{
        type:mongoose.Schema.Types.ObjectId,ref:"Mentor"
    },
    datBefore:Object,
    dataAfter:Object,
    timestamp:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("AuditLog",auditLogSchema);