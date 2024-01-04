import React, { useState } from 'react';
import { auth } from '../config/firebase'; 
import './Login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (err) {
      console.error('Error during login:', err);
      // Handle login error (e.g., display an error message)
    }
  };

  return (
    <div className='parent'>
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
