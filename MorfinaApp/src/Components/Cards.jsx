import React from "react";
import "./Styles/cards.css";
const Cards = () => {
  return (
    <div className="cardsContainer">
      <div className="imagenesPortada">
        <div className="imgCard">
          <h4 className="tituloCard">Voz (Lider)</h4>
          <img src=".\public\img\martin1.jpg" alt="imagen Martin" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Bateria (percusion)</h4>
          <img src=".\public\img\ariel1.jpg" alt="Imagen Ariel" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Bajo</h4>
          <img src=".\public\img\braianE1.jpg" alt="Imagen Braian E" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Guitarra (1° y 2°)</h4>
          <img src=".\public\img\agus1.jpg" alt="Imagen Agustin" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Guitarra (1° y 2°)</h4>
          <img src=".\public\img\braianM1.jpg" alt="Imagen Braian M" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Teclados y Coros</h4>
          <img src=".\public\img\luciano1.jpg" alt="Imagen Luciano" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
