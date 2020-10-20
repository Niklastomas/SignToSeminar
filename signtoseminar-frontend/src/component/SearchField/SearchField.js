import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import './SearchField.css';

function SearchField({ handleSearchChange }) {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    handleSearchChange(searchText);
  }, [searchText, handleSearchChange]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className='searchField'>
      <SearchIcon style={{ color: 'black' }} />
      <input onChange={handleChange} placeholder='Search'></input>
    </div>
  );
}

export default SearchField;
