import React from "react";
import "./Styles/logos.css";
const Logos = () => {
  return (
    <div className="logos-container">
      <img
        src=".\public\img\logoRicotero.jpg"
        className="logoRicotero"
        alt="Logo redonditos"
      />
      <img
        src=".\public\img\logo morfina.jpg"
        className="logoMorfina"
        alt="Logo Morfina"
      />
    </div>
  );
};

export default Logos;
