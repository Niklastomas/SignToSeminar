import React, { useState, useEffect } from 'react';
import './SeminarInfo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useParams } from 'react-router-dom';

function SeminarInfo() {
  const { id } = useParams();

  const [seminar, setSeminar] = useState({});

  useEffect(() => {
    fetch(`https://localhost:44320/api/seminar/${id}`)
      .then((response) => response.json())
      .then((json) => setSeminar(json))
      // .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class='seminarieInfo'>
      <h1>{seminar.title}</h1>
      <div className='seminarInfo__content'>
        <LocationOnIcon fontSize='large' />
        <h3>{seminar.location}</h3>
      </div>

      <div className='seminarInfo__content'>
        <CalendarTodayIcon fontSize='large' />
        <h3>{seminar.date && seminar.date.substring(0, 10)}</h3>
      </div>

      <div className='seminarInfo__content'>
        <ScheduleIcon fontSize='large' />
        <h3>{seminar.date && seminar.date.substring(11)}</h3>
      </div>

      <button>Anmäl</button>
      <button>
        <a href=''>Tillbaka</a>
      </button>
    </div>
  );
}

export default SeminarInfo;
