import React from "react";
import "./Styles/qr.css";
const QR = () => {
  return (
    <div className="QR-container">
      <h1 className="qr-title">Escanea el QR y sumate</h1>
      <img
        src=".\public\img\MorfinaQR.jpeg"
        alt="imagen de QR"
        className="img-qr"
        id="QR"
      />
      <p>
        Este es el canal oficial de Morfina R.E.V, estaremos enviando noticias,
        fechas, eventos, desde ya a los seguidores de este canal tendrán las
        primicias y descuentos en entradas y demás... Compartí Que sea Rock !!!
      </p>
    </div>
  );
};

export default QR;
