import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from '../../firebase';

function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(input);
  };

  const handleClick = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(input.username, input.password)
      .then((auth) => console.log(auth))
      .catch((error) => alert(error.message));

    setInput({
      username: '',
      password: '',
    });
  };

  return (
    <div class='login'>
      <h1>LOGGA IN</h1>
      <form>
        <label for='username'> Username </label>
        <input
          onChange={handleChange}
          type='text'
          name='username'
          value={input.username}
        />
        <label for='password'> Password </label>
        <input
          onChange={handleChange}
          type='password'
          name='password'
          value={input.password}
        />
        <button onClick={handleClick}>Logga in</button>
      </form>
      <p>
        <Link to='/register'>Dont have an account? Click Here!</Link>
      </p>
    </div>
  );
}

export default Login;
