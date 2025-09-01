import React from "react";
import "./Styles/login.css";
const Login = () => {
  return (
    <div className="loginContainer">
      <h1 className="registroTitle">Registrate y Contactanos</h1>
      <div className="contenedorGal">
        <section className="imagenContainer">
          <img src="public\img\FondoRegistro.jpeg" alt="" />
        </section>
        <section className="formularioContainer">
          <h1 className="titleLogin">Login</h1>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="ingrese qaui su email" />
          <label htmlFor="pass">Contraseña</label>
          <input type="password" id="pass" placeholder="ingrese su contaseña" />
          <button className=" ingresar" type="submit">
            Ingresar
          </button>
          <p className="registrate">
            si no estas Registrado <a href="#Registro">Registrate</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
