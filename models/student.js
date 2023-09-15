const mongoose=require("mongoose")
const studentSchema= mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    rollnumber:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true}

})
module.exports=mongoose.model("Student",studentSchema)