import React, { useState } from 'react'

function Validation() {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const handleName = ()=>{
        
    }
  return (
    <div>
        <h1>Form  Validation Demo</h1>
        <form >
            <label htmlFor="">Enter Name:</label>
            <input type="text" onChange={handleName} name='name' value={name} required/>
            <br /><br />
            <label htmlFor="">Enter Email:</label>
            <input type="text" name='email' value={email} required />
            <br /><br />
            <input type="submit" value='Submit' />
        </form>
    </div>
  )
}

export default Validation