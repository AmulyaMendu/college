import {useState} from "react"
import "../App.css"
const Students = () => {
const[form,setForm]=useState({gender:"male"})
const[data,setData]=useState({})
const submitData=(e)=>{
    e.preventDefault()
    fetch("http://localhost:8080/students/add",{
        method:"POST",
        body:JSON.stringify(form),
     headers:{
    "Content-Type":"application/json",
    "Accept": "application/json"
}
    }).then((response)=>response.json()).then((data)=>setData(data))
}
// alert(JSON.stringify(data))

    return (<div >

<form  className="student-data" 
            onSubmit={submitData}

            
>
   <div>
   <input  name="name" placeholder="name" onChange={(e)=>setForm({...form,name:e.target.value})} required/> </div>
   <div> <input type="email" name="email" placeholder="email" onChange={(e)=>setForm({...form,email:e.target.value})} required/> </div>
<div>
    <input  name="rollnumber" placeholder="rollnumber" onChange={(e)=>setForm({...form,rollnumber:e.target.value})} required/>
    </div>
<div>
    <input  name="age" placeholder="age" type="number" onChange={(e)=>setForm({...form,age:e.target.value})} required/>
    </div>
<div >
<select style={{width:"170px"}} name="gender" placeholder="Gender" onChange={(e)=>setForm({...form,gender:e.target.value})} required>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="others">Others</option>
</select>
</div>
<br/>
<div>
<button type="submit">Submit</button>
</div>
</form>
{
    data.status==="sucess" && <div style={{color:"green"}}>ADDED SUCCESSFULLY</div>
}{
        data.status==="failed" && <div style={{color:"red"}}> FAILED</div>

}

    </div>
    )
}
export default Students
