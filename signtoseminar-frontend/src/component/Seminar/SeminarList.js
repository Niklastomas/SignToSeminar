import React, {useState, useEffect} from "react";
import "./SeminarList.css";
import Seminar from "./Seminar";

function SeminarList() {
  const [seminars, setSeminars] = useState([])

  useEffect(() => {
   fetch("https://localhost:44320/api/seminar").then((Response) => Response.json())
   .then((json) => console.log(json)).catch((error) => console.log(error));
  }, [])

  

  return (
    <div className="seminarie">
      <h1>Seminarie</h1>
      {seminars && seminars.map((seminar) => (
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
