import React, { useState, useEffect } from 'react';
import './SeminarInfo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useHistory, useParams } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import ErrorAlert from '../Alerts/ErrorAlert';
import SuccessAlert from '../Alerts/SuccessAlert';

function SeminarInfo() {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);

  const [seminar, setSeminar] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetch(`https://localhost:44320/api/seminar/${id}`)
      .then((response) => response.json())
      .then((json) => setSeminar(json))
      // .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => {
    fetch('https://localhost:44320/api/userseminar', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seminarId: id,
        userId: user.userId,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json !== 'Successfully signed up to seminar') {
          setError(json);
        } else {
          setSuccess(json);
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div class='seminarieInfo'>
      <h1>{seminar.title}</h1>
      {error && <ErrorAlert message={error} close={() => setError('')} />}
      {success && (
        <SuccessAlert message={success} close={() => setSuccess('')} />
      )}

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
        <h3>{seminar.date && seminar.date.substring(11, 16)}</h3>
      </div>

      <Button
        onClick={handleClick}
        style={{ margin: 15 }}
        variant='contained'
        color='primary'
      >
        Sign Up
      </Button>

      <Button
        onClick={() => history.push('/seminar')}
        variant='contained'
        color='primary'
      >
        Go Back
      </Button>
    </div>
  );
}

export default SeminarInfo;
