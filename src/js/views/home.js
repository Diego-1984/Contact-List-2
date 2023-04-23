import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<>
		<div className="container-fluid bg-black justify-content-end">			
			<div className="container w-75 vh-100 bg-white d-flex justify-content-end">
			<Link to="/demo">
					<button className="btn btn-success mt-3 my-3 ">Añadir nuevo contacto</button>
				</Link>
		</div>
					
		</div>
		</>
	);
};
