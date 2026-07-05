import { useState } from "react"

const MyForm = () => {
    // const [nameInput,setNameInput]=useState("");
    // const [emailInput,setEmailInput]=useState("");

    const [formInputs,setFormInputs]=useState({Name:"",Email:"",Age:"",Gender:"",generatlInfo:"",isStudent:false,country:"",status:""});

    const handleChackBoxChanged = (event) => {
        setFormInputs({...formInputs,isStudent:event.target.checked});
    } 

    return (
        <form onSubmit={(event) => {event.preventDefault();}} action="">
            <label htmlFor="">Name:</label>
            <input type="text" value={formInputs.Name} onChange={(event) => {setFormInputs({...formInputs,Name:event.target.value})}} />
            <hr/>
            <label htmlFor="">Email:</label>
            <input type="text" value={formInputs.Email} onChange={(event) => {setFormInputs({...formInputs,Email:event.target.value});}} />
            <hr/>
            <label htmlFor="">Age:</label>
            <input type="text" value={formInputs.Age} onChange={(event) => {setFormInputs({...formInputs,Age:event.target.value});}} />
            <hr/>
            <label htmlFor="">Gender:</label>
            <input type="text" value={formInputs.Gender} onChange={(event) => {setFormInputs({...formInputs,Gender:event.target.value});}} />
            <hr/>

            <label htmlFor="checkbox">Are you student</label>
            <input id="checkbox"type="checkbox" checked={formInputs.isStudent} onChange={handleChackBoxChanged}/>
            
            <hr/>
            <label htmlFor="">General Info</label>
            <textarea 
                    name="" id="" value={formInputs.generatlInfo} onChange={(event) => {setFormInputs({...formInputs,generatlInfo:event.target.value})}}>

            </textarea>
            

            <hr/>

            <select value={formInputs.country} onChange={(event) =>setFormInputs({...formInputs,country:event.target.value})} name="" id="">
                <option>KSA</option>
                <option>EGY</option>
                <option>MAR</option>
            </select>

            <hr />

            <input value="Student" type="radio" name="status" checked={formInputs.status=="Student"} onChange={(event) => setFormInputs({...formInputs,status:event.target.value})}/>
            Student
            <input value="Teacher" type="radio" name="status" checked={formInputs.status=="Teacher"} onChange={(event) => {setFormInputs({...formInputs,status:event.target.value})}}/>
            Teacher

            <button>
                Submit
            </button>
        </form>
    )
}

export default MyForm 