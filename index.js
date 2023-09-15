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
// app.get("/allstudents",(req,res)=>{
//     res.send(students)
// })
// app.post("/addstudent",(req,res)=>{
//     console.log(req.body)
//     students.push(req.body)
//     res.send({
//         status: "success",
//         data:req.body
//     })
// })
// app.post("/somedata",(req,res)=>{
//     console.log(req.body)
//     res.send({
//         message:"received data",
//         status: "success",
//     })
// })
app.listen(8080,()=>console.log("server is up"))

// http://localhost:8080/students/all