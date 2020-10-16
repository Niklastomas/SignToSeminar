import React, { useState, useEffect } from 'react';
import './SeminarList.css';
import Seminar from './Seminar';
import { Link } from 'react-router-dom';

function SeminarList({ url, title }) {
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSeminars(json))
      // .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div className='seminarie'>
      <h1>{title}</h1>
      {seminars.length > 0 &&
        seminars.map((seminar) => (
          <Seminar
            key={seminar.userId}
            id={seminar.seminarId}
            title={seminar.title}
            date={seminar.date.substring(0, 10)}
            location={seminar.location}
            link={false}
          />
        ))}
    </div>
  );
}

export default SeminarList;
