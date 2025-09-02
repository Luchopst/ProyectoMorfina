import React from "react";
import "./Styles/login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <h1 className="registroTitle">Registrate y Contactanos</h1>
      <div className="contenedorGal">
        {/* Imagen */}
        <section className="imagenContainer">
          <img src="/img/FondoRegistro.jpeg" alt="Fondo de registro" />
        </section>

        {/* Formulario */}
        <section className="formularioContainer">
          <h2 className="titleLogin">Login</h2>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Ingrese aquí su email" />

          <label htmlFor="pass">Contraseña</label>
          <input
            type="password"
            id="pass"
            placeholder="Ingrese su contraseña"
          />

          <button className="ingresar" type="submit">
            Ingresar
          </button>

          <p className="registrate">
            ¿No estás registrado? <a href="#Registro">Registrate</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
