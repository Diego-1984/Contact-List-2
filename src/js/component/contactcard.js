import React from "react";


export const Contactcard = () => {
  return (
    <div className="row border mx-2">
        <div className="col-3">
            <img src="https://media.istockphoto.com/id/1135031219/es/vector/usuario-miembro-de-perfil-de-icono-de-hombre-vector-de-s%C3%ADmbolo-perconal-en-fondo-aislado.jpg?s=170667a&w=0&k=20&c=vacSQk6KSFhZ8YbdZu-i83QMA4LN9MrkRb7tFUGbJcs=" alt="Profile"style={{ width: "125px", height: "125px" }} />
        </div>

        <div className="col-7">
            <div className="my-1"><h5>Diego Menor</h5></div>
            <div className="my-1"><i className="fa-solid fa-map-pin"></i>  Toledo</div>
            <div className="my-1"><i className="fa-solid fa-envelope"></i>  diego@</div>
            <div className="my-1"><i className="fa-solid fa-square-phone-flip"></i>  6556155</div>
        </div>

        <div className="col-2 my-3">
            <button><i className="fa-solid fa-trash-can"></i></button>
            <br/>
            <br/>
            <button><i className="fa-solid fa-pencil"></i></button>
        </div>
      
    </div>
  );
};
