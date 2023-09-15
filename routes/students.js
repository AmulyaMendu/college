const express=require("express");
const mongoose=require("mongoose")

const router=express.Router();
const student=require("../models/student")
mongoose.connect("mongodb://localhost/students")
router.post("/add",async(req,res)=>{
    try{
        const data=await student.create(req.body)
        res.status(200).send({
            status:"sucess",
            result:data
        })

    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
    console.log(req.body)
   
})
// router.get("/all",(req,res)=>{
//     res.status(200).send({
//         status:"success,get api"
//     })
// })
// router.post("/all",(req,res)=>{
//     console.log(req.body)
//     res.status(200).send({
//         status:"post api",
//         data:req.body
//     })
// })
module.exports=router