import React, {useState} from "react";
import "./App.css"; 


function App(){
    const [value,setValue] = useState("")

   
    return (
    <div className="css">
    <div className="css1">
     <input type ="text" value = {value} onChange = {(e)=>setValue(e.target.value)} />
       <h1>{value}</h1>
       </div>
    </div>
)
}
export default App;