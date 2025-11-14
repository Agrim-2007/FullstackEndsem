import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchProfile(token);
    }
  }, []);

  const fetchProfile = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignup ? '/api/signup' : '/api/login';
      const data = isSignup ? { email, password, name } : { email, password };

      const response = await axios.post(`http://localhost:5000${endpoint}`, data);

      if (isSignup) {
        setMessage('User created successfully. Please log in.');
        setIsSignup(false);
      } else {
        localStorage.setItem('token', response.data.token);
        setIsLoggedIn(true);
        fetchProfile(response.data.token);
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    setMessage('');
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile</h1>
          <p className="message">{message}</p>
          {user && (
            <div>
              <p>Welcome, {user.name || user.email}!</p>
              <p>Hello World!</p>
            </div>
          )}
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
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
          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>
        <button className="toggle-button" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
        </button>
        {message && <p className="message">{message}</p>}
      </header>
    </div>
  );
}

export default App;
