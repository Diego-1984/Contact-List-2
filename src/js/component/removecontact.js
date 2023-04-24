import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Removecontact=(props)=>{
    const{contact, removeContact}=props
    return(
        <>
        <div className="row w-100 border border-dark p-2 rounded bg-white my-3">
            <div className="col-11">{props.contact.text}</div>
            <div className="col-1"><AiOutlineCloseCircle onClick={()=>removeContact(contact.id)}/></div>                 
            
        </div>
        </>
    )
}
export default Removecontact;