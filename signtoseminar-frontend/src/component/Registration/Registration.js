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
    fullname: '',
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
    console.log('hej');
    firebase
      .auth()
      .createUserWithEmailAndPassword(input.username, input.password)
      .then((auth) => {
        console.log(auth);
        history.push('/');
      })
      .catch((error) => alert(error.message));

    setInput({
      username: '',
      password: '',
      confirmPassword: '',
      fullname: '',
    });
  };

  return (
    <div className='registration'>
      <h1>Registration</h1>
      <form>
        <label htmlFor='E-mail'> Enter email </label>
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
        <label htmlFor='Name'> Enter full name </label>
        <input
          onChange={handleChange}
          type='text'
          name='fullname'
          value={input.fullname}
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
