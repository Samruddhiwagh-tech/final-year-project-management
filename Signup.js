import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role,
      });
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>

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
      <p className="selected-role">Sign up as: <strong>{role.charAt(0).toUpperCase() + role.slice(1)}</strong></p>

      <input
        type="email"
        className="signup-input"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        className="signup-input"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button className="signup-button" onClick={handleSignup}>Sign Up</button>

      <p className="login-link">
        Already have an account?{' '}
        <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}

export default Signup;
