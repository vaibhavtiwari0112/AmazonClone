import React from 'react';
import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { db } from './Firebase';
import { auth } from './Firebase';

import './Login.css';

function Login() {
    const history = useHistory();
   const [email, setemail] = useState('');
   const [password, setPassword] = useState('');

   
   const signIn= e =>{
e.preventDefault();
//some fancy firebase login
auth
.createUserWithEmailAndPassword(email,password)
   .then(auth => {
    console.log(auth);
        history.push('/')

})
.catch(error => alert(error.message)) 
   }

   const register = e =>{
    e.preventDefault();
      //some fancy firebase register
      auth.createUserWithEmailAndPassword(email,password)
      .then((auth) => {
          console.log(auth);
          if(auth) {
              history.push('/')
          }
      })
      .catch(error => alert(error.message)) 
   }
    return(
        <div className="Login">
            <Link to='/'>
            <img className='Login-logo'
            src="https://www.pngfind.com/pngs/m/123-1233928_amazon-kindle-logosvg-wikimedia-commons-small-amazon-logo.png" 
            alt="" />
            </Link>
            <div className="Login-container">
                <h1>
                    Sign In
                </h1>
                <form>
                <h5>
                   E-mail
                </h5>
                <input type='text' value={email} onChange={e=> setemail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password'
                value={password} onChange={e=> setPassword(e.target.value)}
                />
                 
                 <button type='submit' onClick={signIn}
                 className='Login-signIn-button'>Sign In</button>
                 <p>
                     By Signing-In you agree to  Amazon-clone terms and conditions.  
                 </p>
                 <button onClick={register}
                 className='Login-registration-button'>Create your account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;