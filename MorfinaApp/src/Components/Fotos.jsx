import React from "react";
import "./Styles/fotos.css";
const Fotos = () => {
  return (
    <div className="fotoContainer" id="Fotos">
      <div className="foto">
        <img src="public\img\mas fotos\Ariel02.jpeg" alt="Ariel Gonzales" />

        <h5 className="fotoTitle">Ariel Gonzales</h5>
        <p className="foto-txt">
          Baterista, Productor musical, Fundador de MORFINA R.E.V, de Gonzalez
          Catan.
        </p>
      </div>
      <div className="foto">
        <img src="public\img\mas fotos\Braian03.jpeg" alt="Braian Molina" />

        <h5 className="fotoTitle">Braian Molina</h5>
        <p className="foto-txt">
          Guitarrista (1°y2°), Fundador de MORFINA R.E.V de Gonzalez Catan.
        </p>
      </div>
      <div className="foto">
        <img src="public\img\mas fotos\Martin02.jpeg" alt="Martin Montenegro" />

        <h5 className="fotoTitle">Martin Montenegro</h5>
        <p className="foto-txt">
          Voz Lider de la Banda, Fundador de MORFINA R.E.V de Gonzalez Catan.
        </p>
      </div>
      <div className="foto">
        <img src="public\img\mas fotos\Braian04.jpeg" alt="Braian Espindola" />

        <h5 className="fotoTitle">Braian Espindola</h5>
        <p className="foto-txt">Bajista, de Rafael Castillo.</p>
      </div>
      <div className="foto">
        <img src="public\img\mas fotos\Agus02.jpeg" alt="Agustin Gonzales" />

        <h5 className="fotoTitle">Agustin Gonzales</h5>
        <p className="foto-txt">Guitarrista (1°y2°) de Gonzalez Catan.</p>
      </div>
      <div className="foto">
        <img src="public\img\mas fotos\Luciano02.jpeg" alt="Luciano Ponce" />

        <h5 className="fotoTitle">Luciano Ponce</h5>
        <p className="foto-txt">
          Tecladista, Coros, Compositor de Isidro Casanova.
        </p>
      </div>
      <div className="contenedorBtn-fotos">
        <button className="btn-fotos">
          <a href="#Content" target="_blank">
            Inicio
          </a>
        </button>
      </div>
    </div>
  );
};

export default Fotos;
