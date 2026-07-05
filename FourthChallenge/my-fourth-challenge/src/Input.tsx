import { useState } from "react";

const Input = () => {
    const [myInputValue,setMyInputValue]=useState("");
    const handleInputChange = (event) => {
        setMyInputValue(event.target.value);
    }
    
    return (
    <div>
        <label htmlFor="name">Your Name: </label>
        <input type="text" value={myInputValue} name="name" id="name" onChange={handleInputChange}/>
    </div>
    )
}

export default Input