import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Auth.css';
import phoneImage from './assets/ecommerce.png';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Login successful!');
      localStorage.setItem('isAuthenticated', 'true');
      // Redirect to home page or any protected route
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={phoneImage} alt="Phone" />
      </div>
      <div className="auth-card">
        <h2>Log in to Exclusive</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email or Phone Number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p>Forgot password?</p>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};


export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [LastName,SetLastName]=useState('')
  const [Address,SetAddress]=useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Save user details to localStorage
    const user = { name, email, password, LastName, Address  };
    localStorage.setItem('user', JSON.stringify(user));
    // Navigate to login after signup
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={phoneImage} alt="Phone" />
      </div>
      <div className="auth-card">
        <h2>Create an account</h2>
        <form onSubmit={handleSignUp}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="text" 
            placeholder="LastName... (optianal)" 
            value={LastName}
            onChange={(e) => SetLastName(e.target.value)}
            
          />
           <input 
            type="text" 
            placeholder="Address... (optianal)" 
            value={Address}
            onChange={(e) => SetAddress(e.target.value)}
            
          />
          <input 
            type="email" 
            placeholder="Email or Phone Number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <button className="google-btn">Sign up with Google</button>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};
