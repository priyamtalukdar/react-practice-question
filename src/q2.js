import React from "react"
import "./App.css"
function App() {

const names = [
    {
        name : "john",
        age : 100,
        id : 1,
        image:" https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
    },
    {
        name : "priyam",
        age : 300,
        id : 2,
        image:" https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
    },
    {
        name : "rashid",
        age : 200,
        id : 3,
        image:" https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
    },
    {
        name : "jitender",
        age : 10,
        id : 4,
        image:" https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"
    }
]
const userd = names.map((user) =>
  <div className= "css" >
  <div className = "css1">
   <img src = {user.image} alt ="" />
   </div>
    <h1> {user.name} {user.age}</h1>
</div>
)
// const userd = names.map((user) => <li key={user.id}>{user.name}</li>);

  return (
    <>
    <div className= "css">
      {userd}
      </div>
    </>
  )
}
export default App;













