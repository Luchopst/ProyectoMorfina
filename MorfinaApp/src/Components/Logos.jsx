import React from "react";
import "./Styles/logos.css";

const Logos = () => {
  return (
    <div className="logos-container">
      <h2 className="logos-title">Manteniendo La Mística Ricotera</h2>
      <div className="logos-wrapper">
        <img
          src="/img/logoRicotero.jpg"
          className="logoRicotero "
          alt="Logo redonditos"
        />
        <img
          src="/img/logoMorfina.jpeg"
          className="logoMorfina"
          alt="Logo Morfina"
        />
      </div>
    </div>
  );
};

export default Logos;
