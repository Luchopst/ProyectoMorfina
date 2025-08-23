import React from "react";
import "./Styles/cards.css";
const Cards = () => {
  return (
    <div className="cardsContainer" id="Cards">
      {" "}
      {/*contenedor gral*/}
      <div className="imagenesPortada">
        {/*SUB-contenedor gral*/}
        <div className="imgCard">
          {/*contenedor de card particular */}
          <h4 className="tituloCard">Martin (Voz)</h4>
          <img src=".\public\img\martin1.jpg" alt="imagen Martin" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Ariel (Bateria)</h4>
          <img src=".\public\img\ariel1.jpg" alt="Imagen Ariel" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Braian E. (Bajo)</h4>
          <img src=".\public\img\braianE1.jpg" alt="Imagen Braian E" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Agustin (Guitarra)</h4>
          <img src=".\public\img\agus1.jpg" alt="Imagen Agustin" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Braian M. (Guitarra) </h4>
          <img src=".\public\img\braianM1.jpg" alt="Imagen Braian M" />
        </div>

        <div className="imgCard">
          <h4 className="tituloCard">Luciano (Teclados/Coros)</h4>
          <img src=".\public\img\luciano1.jpg" alt="Imagen Luciano" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
