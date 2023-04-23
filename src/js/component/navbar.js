import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbar bg-white d-flex justify-content-end mx-3 ">
						<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success mt-3 my-3">Añadir nuevo contacto</button>
				</Link>
			</div>
		</div>
	);
};
