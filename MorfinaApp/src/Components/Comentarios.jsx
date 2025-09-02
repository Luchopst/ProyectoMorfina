import React, { useState } from "react";
import "./Styles/comentarios.css";
const Comentarios = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    comentario: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ⚡ Aquí harías la petición a tu backend (Node/Java con Resend)
    console.log("Formulario enviado:", formData);

    // Ejemplo: envío a un endpoint en tu backend
    /*
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "tucorreo@ejemplo.com",
        subject: "Nuevo comentario en la web",
        html: `
          <h3>Nuevo comentario recibido</h3>
          <p><strong>Nombre:</strong> ${formData.nombre} ${formData.apellido}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Comentario:</strong> ${formData.comentario}</p>
        `,
      }),
    });

    const data = await response.json();
    console.log(data);
    */

    // Reinicia el formulario
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      comentario: "",
    });
  };

  return (
    <div className="comentarios" id="Comentarios">
      <h2 className="comentariosTitle">Dejanos tu comentario</h2>
      <form onSubmit={handleSubmit} className="form-comentarios">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="comentario"
          placeholder="Escribe tu comentario..."
          value={formData.comentario}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Comentarios;
