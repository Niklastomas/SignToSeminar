import React from 'react'
import "./Registration.css"

function Registration() {
    return (
        <div className="registration">
        <h1>Registration</h1>
        <form onsubmit="">
          <label for="E-mail"> Enter email </label>
          <input type="email" />
          <label for="password"> Enter Password </label>
          <input type="password" />
          <label for="password"> Confirm Password </label>
          <input type="password" />
          <label for="Name"> Enter full name </label>
          <input type="text" />
  
          <button type="submit">Register</button>
        </form>
        <p>Already registred? <a href="login.html">Login here!</a></p>
      </div>
    )
}

export default Registration
