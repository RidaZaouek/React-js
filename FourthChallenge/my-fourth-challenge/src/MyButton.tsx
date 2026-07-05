
import { useState } from "react";



let name="Ahmed";

const MyButton = () => {
    console.log("render");
    const [name,setName]=useState("Ahmed");

    const buttonClicked =()=> {

       setName("Ahmed");
    }; 

  return (
    <div>
        <button onClick={buttonClicked}>Click Me</button>
        <h1>{name}</h1>
    </div>
  )
}



export default MyButton