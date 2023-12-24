const express=require("express");
const bodyParser=require("body-parser");
const studentroute=require("./routes/students")
const cors=require("cors")
const app=express();
app.use(bodyParser.json());
app.use(cors())
app.use("/students",studentroute)
app.get("/",(req,res)=>{
    console.log("btowser is requested")
    res.status(200).send({ message: "haii my family"})
})
const students=[]
const professors=[]
const PORT=process.env.PORT || 8000
app.listen(PORT,()=>console.log("server is up"))

// http://localhost:8080/students/all