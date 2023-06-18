import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-black">	
			
			<div className="container w-50 vh-100 bg-white">
							
				<div className="titulo d-flex justify-content-center p-3"><h1>Añadir nuevo contacto</h1></div>

				<div className="input flex-nowrap mt-3">
				Nombre completo  				
  				<input type="text" class="form-control mt-2" placeholder="Inserta nombre completo" aria-label="Username" aria-describedby="addon-wrapping"/>
				</div>


				<div className="input flex-nowrap mt-3">
				E-mail  				
  				<input type="text" class="form-control mt-2" placeholder="Username" aria-label="Inserta e-mail" aria-describedby="addon-wrapping"/>
				</div>

				<div className="input flex-nowrap mt-3">
				Teléfono  				
  				<input type="number" class="form-control mt-2" placeholder="Número completo" aria-label="Inserta número completo" aria-describedby="addon-wrapping"/>
				</div>

				<div className="input flex-nowrap mt-3">
				Dirección  				
  				<input type="text" class="form-control mt-2" placeholder="Inserta dirección completa" aria-label="Username" aria-describedby="addon-wrapping"/>
				</div>

				<div className="d-grid gap-2 mt-3">
  				<button class="btn btn-primary" type="submit">Guardar</button>  
				</div>

				<div className="footer">
					<Link to="/">
				<button className="btn btn-link">Volver a la lista de contactos</button>
					</Link>
				</div>
		</div>
	</div>
			
			
			
	);
};
