import React from "react";

import "./Styles/videos.css";

const Videos = () => {
  return (
    <div className="videosContainer" id="Videos">
      <div className="AparienciasVideo">
        <iframe
          src="https://www.youtube.com/embed/QCkZY70I2vA?si=q5fcKDObMbU7Ipm-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
           picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="HumanidadVideo">
        <iframe
          src="https://www.youtube.com/embed/D0o19BwxD7M?si=bf69TAgAIv4b-B3d"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <button className="verMas btn-verMas" type="button">
          <a href="#Mas">Ver mas </a>
        </button>
      </div>
    </div>
  );
};

export default Videos;
