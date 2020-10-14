import React from 'react';
import { Link } from 'react-router-dom';
import './Seminar.css';

function Seminar({ id, title, date, location }) {
  return (
    <Link to={`/seminar/info/${id}`}>
      <div className='seminar'>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </Link>
  );
}

export default Seminar;
