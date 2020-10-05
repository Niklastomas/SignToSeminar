import React from "react";
import "./SeminarInfo.css";

function SeminarInfo() {
  return (
    <div class="seminarieInfo">
      <h1>Seminarie</h1>
      <h3>Plats: Långedragsvägen 116</h3>
      <h3>Tid: 16:00-20:00</h3>
      <h3>Lärare: Jan-Åke</h3>
      <button>Anmäl</button>
      <button>
        <a href="seminarie.html">Tillbaka</a>
      </button>
    </div>
  );
}

export default SeminarInfo;
