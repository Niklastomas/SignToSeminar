import React, { useState, useEffect } from 'react';
import './SeminarList.css';
import Seminar from './Seminar';
import { Link } from 'react-router-dom';

function SeminarList() {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetch('https://localhost:44320/api/seminar')
      .then((response) => response.json())
      .then((json) => setSeminars(json))
      // .then((json) => console.log(json))
      .catch((error) => console.log(error));

    console.log(seminars);
  }, []);

  return (
    <div className='seminarie'>
      <h1>Seminarie</h1>
      {seminars &&
        seminars.map((seminar) => (
          <Seminar
            id={seminar.seminarId}
            title={seminar.title}
            date={seminar.date.substring(0, 10)}
            location={seminar.location}
          />
        ))}
    </div>
  );
}

export default SeminarList;
