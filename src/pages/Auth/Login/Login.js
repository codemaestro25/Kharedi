import React, {useState} from "react";
import "./Login.scss";
import axios from "axios";
import { redirect } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios({
            url:'https://fakestoreapi.com/auth/login',
            method: 'POST',
            body:JSON.stringify({
                username: username,
                password: password
            })
        }).then(res=>{res.json()})
        .then(json=>console.log(json))
    }
  return (
    <div>
      <div className="signup flex justify-center align-center">
        <div className="signup-classic j">
          <h2>Login to Continue</h2>
          <form className="form">
            <fieldset className="username">
              <input type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)} />
            </fieldset>
            <fieldset className="password">
              <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </fieldset>
            <button type="submit" className="btn fs-18" onClick={()=>handleLogin()}>
            Log in
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
