import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const [userReq, setUserReq] = useState({
        username: '',
        email: '',
        password: '',
    })
    
  function handleRegistration(){
    // api call 
  }



  return (
    <div className="RegisterBox">
      <form>
      <label>UserName:</label>
<input type="text" value={userName} onChange={(e) => setUserReq(e.target.value)} />

<label>Email:</label>
<input type="email" value={email} onChange={(e) => setUserReq(e.target.value)} />

<label>Password:</label>
<input type="password" value={password} onChange={(e) => setUserReq(e.target.value)} />

<button type="button" onClick={handleRegistration}>
  Register
</button>
<Link to="/Loginpage">Already Have an Account?</Link>
</form>
    </div>
  )
}

export default Register
