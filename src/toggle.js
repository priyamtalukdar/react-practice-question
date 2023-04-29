import React, {useState} from "react";
import "./App.css"; 


function App(){
    const [value,setValue] = useState("hello world")

    function change(){
        setValue( value === "hello world"   ? "hello" : "hello world");
     }

    return (
    <div className="css">
    <div className="css1">
      <button onClick={change}> click here</button>
       <h1>{value}</h1>
       </div>
    </div>
)
}
export default App;