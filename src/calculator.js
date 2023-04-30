import React, {useState} from "react";
import "./App.css"; 


function App(){
    const [value1,setValue1] = useState("");
    const [value2,setValue2] = useState("");
    const [totalvalue,setValue] = useState("");
function add(){
    
    setValue(value1+value2)
}
function minus(){
    
    setValue(value1-value2)
}
function multiply(){
    
    setValue(value1*value2)
}
function divide(){
    
    setValue(value1/value2)
}
   
    return (
    <div className="css">
   
    
    enter number <input type ="number" value={value1} onChange={(e)=>setValue1(parseInt(e.target.value))}/><br />
    enter number <input type ="number" value={value2} onChange={(e)=>setValue2(parseInt(e.target.value))}/><br />
    <div className="css1">
<button onClick={add}>plus</button><br />
<button onClick={minus}>minus</button><br />
<button onClick={multiply}>multiply</button><br />
<button onClick={divide}>divide</button>
   <h1> {totalvalue}</h1>
       </div>
    </div>
)
}
export default App;