import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Registration.css';

import firebase from '../../firebase';

function Registration() {
  const history = useHistory();
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.username, input.password)
      .then((auth) => {
        if (auth) {
          fetch('https://localhost:44320/api/user', {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email: input.username,
              FirstName: input.firstName,
              LastName: input.lastName,
            }),
          })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => alert(error.message));

          history.push('/');
        }
      })
      .catch((error) => alert(error.message));

    setInput({
      username: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    });
  };

  return (
    <div className='registration'>
      <h1>Registration</h1>
      <form>
        <label htmlFor='email'> Enter email </label>
        <input
          onChange={handleChange}
          type='email'
          name='username'
          value={input.username}
        />
        <label htmlFor='password'> Enter Password </label>
        <input
          onChange={handleChange}
          type='password'
          name='password'
          value={input.password}
        />
        <label htmlFor='password'> Confirm Password </label>
        <input
          onChange={handleChange}
          type='password'
          name='confirmPassword'
          value={input.confirmPassword}
        />
        <label htmlFor='firstName'> Enter first name </label>
        <input
          onChange={handleChange}
          type='text'
          name='firstName'
          value={input.firstName}
        />
        <label htmlFor='lastName'> Enter last name </label>
        <input
          onChange={handleChange}
          type='text'
          name='lastName'
          value={input.lastName}
        />

        <button onClick={handleClick}>Register</button>
      </form>
      <p>
        <Link to='/login'>Already registred? Login here!</Link>
      </p>
    </div>
  );
}

export default Registration;
