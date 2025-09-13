import "./Styles/fechas.css";
const Fechas = () => {
  return (
    <div className="fechasContainer" id="Fechas">
      <h1 className="fechasTitle">Fechas y Novedades</h1>
      <div className="fechaVideo">
        <video
          src="public\img\Videos\Club53.mp4"
          className="Videos"
          autoPlay
          muted
          loop
          controls
        >
          {" "}
          20 de Septiembre CLUB53
        </video>
        <section>
          <p className="fechasTxt">
            Hola Como estan? Este Sabado 20 de Septiembre Previa al dia de la
            primavera nos estaremos presentando en Culb 53 como siempre dando lo
            mejor para ustedes junto a los amigos de ABEJAS tributo a LAS
            PELOTAS no se lo pierdan soliciten sus entradas al INSTAGRAM{" "}
            <a href="https://www.instagram.com/Morfina_rock" target="_blank">
              <strong>"MORFINA_ROCK"</strong>
            </a>
            Sumate al canal de Whatsapp
            <a href="#Redes">
              <strong>"MORFINA R.E.V"</strong>
            </a>
            Seguinos en Youtube{" "}
            <a href="https://www.youtube.com/@MORFINA-R.E.V" target="_blank">
              <strong>"MORFINA R.E.V"</strong>
            </a>
            tu LIKE nos da una gran mano.. como siempre los esperamos y que sea
            Rock!!!
          </p>
        </section>
      </div>
    </div>
  );
};

export default Fechas;
