import React,{useState, useEffect} from "react";
import "./App.css";
function App(){
    let greeting ="";
const[time,setTime] = useState(new Date().getHours()+ ":"+ new Date().getMinutes()+ ":"+ new Date().getSeconds());

useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().getHours()+ ":"+ new Date().getMinutes()+ ":"+ new Date().getSeconds());
    },1000)
    
},[])

function change(){
    
    if(new Date().getHours()>16){
      greeting = alert("good afternoon")
    }
    else if(new Date().getHours()<15){
        greeting =  alert("good morning")
    }
    else if(new Date().getHours() === 24){
        greeting = alert("noon")
    }
}
return(
<div>
    <h1> current time = {time}</h1>
    <button onClick={change}>click</button><br></br>
   <input type="text" name="fname"></input>
   <div style={{color: greeting === "good morning" ? "red":"green"}}>
   <h1> utyfujiku</h1>
   </div>
    
</div>
)
}
export default App;