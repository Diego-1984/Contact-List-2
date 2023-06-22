import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Diego3")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  });

  const handleDelete = (id) => {
    const config = {
      method: "DELETE",
    };

    fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, config)
    .then((res) => res.json()
    );
  };

  return (
    <>
      <div className="container-fluid w-50 justify-content-end d-flex bg-white">
        <Link to="/addcontact">
          <button className="btn btn-success mt-3 my-3 mx-2 ">
            Añadir nuevo contacto
          </button>
        </Link>
      </div>

      <div className="container w-50 vh-100 bg-white">
        {contacts.map((contact, index) => (
          <div key={index} className="row border mx-2">
            <div className="col-3">
              <img
                src="https://media.istockphoto.com/id/1135031219/es/vector/usuario-miembro-de-perfil-de-icono-de-hombre-vector-de-s%C3%ADmbolo-perconal-en-fondo-aislado.jpg?s=170667a&w=0&k=20&c=vacSQk6KSFhZ8YbdZu-i83QMA4LN9MrkRb7tFUGbJcs="
                alt="Profile"
                style={{ width: "125px", height: "125px" }}
              />
            </div>

            <div className="col-7">
              <div className="my-1">
                <h5>{contact.full_name}</h5>
              </div>
              <div className="my-1">
                <i className="fa-solid fa-map-pin"></i> {contact.address}
              </div>
              <div className="my-1">
                <i className="fa-solid fa-envelope"></i> {contact.email}
              </div>
              <div className="my-1">
                <i className="fa-solid fa-square-phone-flip"></i>{" "}
                {contact.phone}
              </div>
            </div>

            <div className="col-2 my-3">
              <button onClick={() => handleDelete(contact.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <br />
              <br />
              <Link to="/editcontact/:id">
                <button>
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
