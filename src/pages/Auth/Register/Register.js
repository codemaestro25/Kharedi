import React from 'react'
import "./Register.scss";

function Register() {
  return (
    <div>
    <div class="signup flex justify-center align-center">
      <div class="signup-classic j">
        <h2> Register to Continue</h2>
        <form class="form">
          <fieldset class="username">
            <input type="text" placeholder="Username" />
          </fieldset>
          <fieldset class="email">
            <input type="text" placeholder="Email" />
          </fieldset>
          <fieldset class="password">
            <input type="password" placeholder="Password" />
          </fieldset>
          <button type="submit" class="btn fs-18">
          Sign Up
          </button>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Register;