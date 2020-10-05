import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div class="login">
        <h1>LOGGA IN</h1>
        <form onsubmit="">
          <label for="username"> Username </label>
          <input type="text" />
          <label for="password"> Password </label>
          <input type="password" />
          <button type="submit">Logga in</button>
        </form>
        <p>Register? <a href="registration.html">Click here!</a></p>
      </div>
    )
}

export default Login
