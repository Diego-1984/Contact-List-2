import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Formulario from "../component/formulario.js";
import Removecontact from "../component/removecontact";


export const Home = () => {
	const [contacts, setContacts]=useState([]);
	const addContact=(text)=>{
		let id = [];		
		let contact={id:id, text: text, completed:false}
		let newContact=[...contacts, contact]
		console.log(newContact)
		setContacts(newContact)
	
		};
		const removeContact=(id)=>{
			let updatedContacts= contact.filter((contact)=>contact.id !==id);
			setTodos(updatedContacts);
	};
	return (
		<>
			<div className="container-fluid w-50 justify-content-end d-flex bg-white">
				<Link to="/demo">
					<button className="btn btn-success mt-3 my-3 ">Añadir nuevo contacto</button>
				</Link>
			</div>
			
			<div className="container w-50 vh-100 bg-white">			
				<p><Formulario addContact={addContact} /></p>
				
				{contacts.map((contact)=>{
				return (<Removecontact removeContact={removeContact} contact={contact} key={contact.id}/>
				)
				})}
			</div>						
		
		</>
	);
};
