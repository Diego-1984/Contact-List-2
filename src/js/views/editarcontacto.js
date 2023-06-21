import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const Editcontact = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    full_name: "",
    email: "",
    agenda_slug: "Diego3",
    address: "",
    phone: "",
  });

  useEffect(() => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/${props.contactId}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      });
  }, [props.contactId]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const config = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `https://assets.breatheco.de/apis/fake/contact/${props.contactId}`,
      config
    )
      .then((res) => res.json())
      .then((response) => navigate("/"));
  };

  return (
    <div className="container-fluid bg-black">
      <div className="container w-50 vh-100 bg-white">
        <div className="d-flex justify-content-center p-3">
          <h1>Editar contacto</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input flex-nowrap mt-3">
            Nombre completo
            <input
              onChange={handleChange}
              name="full_name"
              type="text"
              className="form-control mt-2"
              placeholder="Inserta nombre completo"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={data.full_name}
            />
          </div>

          <div className="input flex-nowrap mt-3">
            E-mail
            <input
              onChange={handleChange}
              name="email"
              type="text"
              className="form-control mt-2"
              placeholder="Username"
              aria-label="Inserta e-mail"
              aria-describedby="addon-wrapping"
              value={data.email}
            />
          </div>

          <div className="input flex-nowrap mt-3">
            Teléfono
            <input
              onChange={handleChange}
              name="phone"
              type="number"
              className="form-control mt-2"
              placeholder="Número completo"
              aria-label="Inserta número completo"
              aria-describedby="addon-wrapping"
              value={data.phone}
            />
          </div>

          <div className="input flex-nowrap mt-3">
            Dirección
            <input
              onChange={handleChange}
              name="address"
              type="text"
              className="form-control mt-2"
              placeholder="Inserta dirección completa"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={data.address}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </form>
        <div className="footer">
          <Link to="/">
            <button className="btn btn-link">
              Volver a la lista de contactos
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};
