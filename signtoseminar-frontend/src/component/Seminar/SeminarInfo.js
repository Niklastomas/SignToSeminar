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
  const [signedUp, setSignedUp] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log('useEffect');
    fetch(`https://localhost:44320/api/seminar/${id}`)
      .then((response) => response.json())
      .then((json) => setSeminar(json))
      .catch((error) => console.log(error));

    if (user) {
      fetch('https://localhost:44320/api/userSeminar/CheckIfSignedUp', {
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
        .then((json) => setSignedUp(json))
        .catch((error) => console.log(error.message));
    }
  }, [success, id, user]);

  const handleSignUp = () => {
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
          setSignedUp(true);
        } else {
          setSuccess(json);
          setSignedUp(false);
        }
      })
      .catch((error) => setError(error.message));
  };

  const handleUnsubscribe = () => {
    fetch('https://localhost:44320/api/userseminar', {
      method: 'delete',
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
        if (json === 'Ok') {
          setSignedUp(false);
        } else {
          setSignedUp(true);
        }
      })
      .catch((error) => setError(error.message));
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

      {signedUp ? (
        <Button
          onClick={handleUnsubscribe}
          style={{ margin: 15 }}
          variant='contained'
          color='secondary'
          disabled={user ? false : true}
        >
          Unsubscribe
        </Button>
      ) : (
        <Button
          onClick={handleSignUp}
          style={{ margin: 15 }}
          variant='contained'
          color='primary'
          disabled={user ? false : true}
        >
          Sign Up
        </Button>
      )}

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
