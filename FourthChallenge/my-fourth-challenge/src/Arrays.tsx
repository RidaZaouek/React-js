import { useState } from "react";


const Arrays = () => {
    
    const [deviceNameInputValue,setDeviceNameInputValue]=useState("");
    const [devices,setDevices]=useState(["iphone","mac","samsung","windows"]);
    
    const devicesList=devices.map((device) => {
        return(
            <li>{device}</li>
        )
    
    })
    
    const handleClick = (e) => {
        // const newDevices=[...devices];
        // newDevices.push(deviceNameInputValue);
        // setDevices(newDevices);  

        setDevices([...devices,deviceNameInputValue]);
    }

    return (
    <div>
        {devicesList}
        <div>
            <input value={deviceNameInputValue} onChange={(e) => {setDeviceNameInputValue(e.target.value)}} type="text" />
            <button onClick={handleClick}>Add</button>
        </div>
    </div>
  )
}

export default Arrays