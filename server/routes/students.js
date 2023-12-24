const express=require("express");
const mongoose=require("mongoose")

const router=express.Router();
const student=require("../models/student")
mongoose.connect('mongodb+srv://amulya:amulya@cluster0.jdt1zmi.mongodb.net/college?retryWrites=true&w=majority')
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
   
})

router.get("/all",async(req,res)=>{
    try{
        let people=await student.find()
        res.status(200).send({
            status:"sucess",
            result:people
        })

    }catch(e){
        res.status(500).send({
            status:"failed",
            message: e.message
          
        })  
    }
   
})
router.delete("/delete/:rollnumber",async(req,res)=>{
    let roll=req.params.rollnumber
    try{
        let dbres=await student.deleteOne({rollnumber:roll})
        res.status(200).send({message:`deleted ${roll}`})


    }catch(e){
        res.send(500).send({status:"failed to delete"})

    }
})

module.exports=router