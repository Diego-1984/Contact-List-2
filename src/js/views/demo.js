import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid bg-black">	
			
			<div className="container w-75 vh-100 bg-white d-flex justify-content-center">
				<div className="row"></div>				
				<h1>Añadir nuevo contacto</h1>							
				<div className="footer"><Link to="/">
				<button className="btn btn-link">Volver a la lista de contactos</button>
			</Link></div>
		</div>
			</div>
			
			
			
	);
};
