import React, {useState} from "react";


const Formulario=(props)=>{
    const [input, setImput]= useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.addContact(input)
        setImput("")
    }
    return(
        <>
        <form onSubmit={handleSubmit} className="rounded">       
            <input 
            value={input}
            onChange={(e)=>setImput(e.target.value)} />                 
            
        </form>
        </>
    )
}
export default Formulario;