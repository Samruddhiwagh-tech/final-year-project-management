import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      const role = userDoc.data().role;

      if (role === 'student') {
        navigate('/student');
      } else {
        navigate('/guide');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <div className="role-toggle">
        <button
          className={`role-button ${role === 'student' ? 'active' : ''}`}
          onClick={() => setRole('student')}
        >
          Student
        </button>
        <button
          className={`role-button ${role === 'guide' ? 'active' : ''}`}
          onClick={() => setRole('guide')}
        >
          Guide
        </button>
      </div>
      <p className="selected-role">Login as: <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong></p>

      <input
        type="email"
        className="login-input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button className="login-button" onClick={handleLogin}>Login</button>

      {/* <p className="signup-link">
        Don’t have an account?{' '}
        <span onClick={() => navigate('/signup')}>Sign up</span>
      </p> */}
    </div>
  );
}

export default Login;
