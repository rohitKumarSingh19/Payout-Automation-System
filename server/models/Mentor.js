const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
const mentorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    defaultRate:{
        type:Number,
        default:0
    },
    role:{
        type:String,
        enum:["admin","mentor"],default:"mentor"
    }
});
//hashPassword before saving
mentorSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next(); 
})
//compare password
mentorSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
}
module.exports=mongoose.model("Mentor",mentorSchema);