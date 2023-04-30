import React,{useState} from "react";

function App(){

const[time,setTime] = useState(new Date().getHours()+ ":"+ new Date().getMinutes()+ ":"+ new Date().getSeconds());



function change(){
    setTime(new Date().getHours()+ ":"+ new Date().getMinutes()+ ":"+ new Date().getSeconds());
    if(new Date().getHours()>16){
        alert("good afternoon")
    }
    else if(new Date().getHours()<15){
        alert("good morning")
    }
    else if(new Date().getHours() === 24){
        alert("noon")
    }
}
return(
<div>
    <h1> current time = {time}</h1>
    <button onClick={change}>click</button>
</div>
)
}
export default App;