import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [input, setInput] = useState({
    username: "",
    password: "",
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

  return (
    <div class="login">
      <h1>LOGGA IN</h1>
      <form onsubmit="">
        <label for="username"> Username </label>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={input.username}
        />
        <label for="password"> Password </label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={input.password}
        />
        <button type="submit">Logga in</button>
      </form>
      <p>
        Register? <a href="registration.html">Click here!</a>
      </p>
    </div>
  );
}

export default Login;
