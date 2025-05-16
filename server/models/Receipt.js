const mongoose=require('mongoose');
const receiptSchema=new mongoose.Schema({
    mentor:{
        type:mongoose.Schema.Types.ObjectId,ref:"Mentor",required:true
    },
    sessions:[{
        type:mongoose.Schema.Types.ObjectId,ref:"Session"
    }],
    baseAmount:Number,
    gst:Number,
    deductions:Number,
    finalAmount:Number,
    message:String,
    sent:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Receipt',receiptSchema);