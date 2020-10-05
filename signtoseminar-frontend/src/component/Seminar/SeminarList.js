import React from "react";
import "./SeminarList.css";
import Seminar from "./Seminar";

function SeminarList() {
  const seminars = [
    { title: "Matte", date: "2020-12-11", location: "Göteborg" },
    { title: "Matte", date: "2020-12-11", location: "Göteborg" },
    { title: "Matte", date: "2020-12-11", location: "Göteborg" },
    { title: "Matte", date: "2020-12-11", location: "Göteborg" },
  ];
  return (
    <div className="seminarie">
      <h1>Seminarie</h1>
      {seminars.map((seminar) => (
        <Seminar
          title={seminar.title}
          date={seminar.date}
          location={seminar.location}
        />
      ))}
    </div>
  );
}

export default SeminarList;
