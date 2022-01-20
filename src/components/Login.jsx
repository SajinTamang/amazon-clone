import React,{useState} from 'react';
import "./css/Login.css"
import {Link, useHistory} from "react-router-dom";
import {auth} from "../firebase";
function Login() {
  const History = useHistory();
  const [email,setEmail] = useState('');

  const [password,setPassword] = useState('');

  const login = (event) =>{
    

    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password) 
    .then((auth)=>{
          History.push('/');
    })
    .catch(e=>alert(e.message));
  }
  const register = (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>{
          History.push('/');
    })
    .catch(e=>alert(e.message));
  }

  return <div className="login">
            <Link to ="/">
              <img className='login__logo'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>

            <div className="login__container">
              <h1>Sign in</h1>
              <form action="">
                <h5>E-mail</h5>
                <input value={email} onChange={event => setEmail(email.target.value)} type="text"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(password.target.value)} type="password"/>
                <button className="login__signInButton" onClick={login}>Sign in</button>
              </form>
              <p>By signing in you agree to Amazons conditions of use and sale. Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads Notice</p>
              <button className='login__registerButton' onClick={register}>Create your amazon account</button>
            </div>

  </div>;
}
export default Login;
