import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./Styles/Footer.css"; // asegurate que este sea el path correcto

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="created">
        <p>© 2025 Morfin R.E.V</p>
      </div>

      <div className="redes">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/Morfina_rock"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-instagram"
        >
          <FaInstagram />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@MorfinR.E.V"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-youtube"
        >
          <FaYoutube />
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029VafNtkY7WnYfQPG0Pi38"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
