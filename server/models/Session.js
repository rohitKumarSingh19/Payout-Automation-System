const mongoose=require('mongoose');
const sessionSchema=new mongoose.Schema({
    mentor:{
        type:mongoose.Schema.Types.ObjectId,ref:"Mentor",required:true
    },
    sessionType:{
        type:String,
        enum:["Live","Evaluation","Recording"],
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    duration:{
        type:Number,//in minutes
        required:true//
    },
    rate:{
        type:Number,//per hour
        required:true
    },
    status:{
        type:String,
        enum:["pending","paid","under_review"],
        default:"pending"
    }
});
module.exports=mongoose.model("Session","sessionSchema");