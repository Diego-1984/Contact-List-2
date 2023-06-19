import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({
		full_name:"",
		email:"",
		address:"",
		phone:"",
		agenda_slug:"AgendaDiego"

	})
	
	const handleChange =(e)=>{
		setData({...data,[e.target.name]:e.target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		const config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }
        fetch('https://assets.breatheco.de/apis/fake/contact/', config)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))}
	return (
		<div className="container-fluid bg-black">	
			
			<div className="container w-50 vh-100 bg-white">
							
				<div className="d-flex justify-content-center p-3"><h1>Añadir nuevo contacto</h1></div>
				<form onSubmit={handleSubmit}>
				<div className="input flex-nowrap mt-3">
				Nombre completo  				
  				<input onChange={handleChange} name= "full_name" type="text" className="form-control mt-2" placeholder="Inserta nombre completo" aria-label="Username" aria-describedby="addon-wrapping"/>
				</div>


				<div className="input flex-nowrap mt-3">
				E-mail  				
  				<input onChange={handleChange} name="email" type="text" className="form-control mt-2" placeholder="Username" aria-label="Inserta e-mail" aria-describedby="addon-wrapping"/>
				</div>

				<div className="input flex-nowrap mt-3">
				Teléfono  				
  				<input onChange={handleChange} name="phone" type="number" className="form-control mt-2" placeholder="Número completo" aria-label="Inserta número completo" aria-describedby="addon-wrapping"/>
				</div>

				<div className="input flex-nowrap mt-3">
				Dirección  				
  				<input onChange={handleChange} name="address" type="text" className="form-control mt-2" placeholder="Inserta dirección completa" aria-label="Username" aria-describedby="addon-wrapping"/>
				</div>

				<div className="d-grid gap-2 mt-3">
  				<button className="btn btn-primary" type="submit">Guardar</button>  
				</div>
				</form>
				<div className="footer">
					<Link to="/">
				<button className="btn btn-link">Volver a la lista de contactos</button>
					</Link>
				</div>
				
		</div>
	</div>
			
			
			
	);
};
