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
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem
        possimus vel autem, corporis voluptates. Magnam corrupti, dolor culpa,
        accusantium non nemo cumque, optio blanditiis fugiat cupiditate quis a
        recusandae?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eaque
        quo quia, eligendi quis architecto porro dolores. Illo aspernatur
        voluptatibus ipsam, distinctio eum iste eligendi sapiente corrupti,
        corporis dolorum est.
      </p>
    </div>
  );
};

export default QR;
