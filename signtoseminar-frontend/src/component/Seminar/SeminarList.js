import React, { useState, useEffect } from 'react';
import './SeminarList.css';
import Seminar from './Seminar';
import { Link } from 'react-router-dom';
import SearchField from '../SearchField/SearchField';
import Checkbox from '../Checkbox/Checkbox';

function SeminarList({ url, title }) {
  const [seminars, setSeminars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSeminars, setFilteredSeminars] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSeminars(json))
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    const result = seminars.filter(
      (seminar) =>
        seminar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        seminar.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeminars(result);
  }, [searchTerm, seminars]);

  const handleSearchChange = (searchText) => {
    setSearchTerm(searchText);
  };

  const handleCheckboxChange = (checked) => {
    setFilteredSeminars((seminars) => {
      return [...seminars.reverse()];
    });
  };

  return (
    <div className='seminarie'>
      <h1>{title}</h1>
      <SearchField handleSearchChange={handleSearchChange} />
      <Checkbox handleCheckboxChange={handleCheckboxChange} />
      {seminars.length > 0 &&
        filteredSeminars.map((seminar) => (
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
