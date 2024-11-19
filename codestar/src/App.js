import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Home from './Components/Home';
import Profile from './Components/Profile';
import About from './Components/About';
import User from './Components/User';
import Successlogin from './Components/Successlogin';
import Calculator from './Components/Calculator';

export default function MyApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
      setIsLoggedIn(true);
      document.body.classList.add('logged-in'); // Add class on login
  };

  // Function to handle logout
  const handleLogout = () => {
      setIsLoggedIn(false);
      document.body.classList.remove('logged-in'); // Remove class on logout
  };

  return (
    <>
      <Router>
        <nav className='Navbar'>
          {/* Navigation using links tags*/}
          
          <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/calculator">Calculator</Link>
        {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/user">Loggin</Link>
                )}
        

          {/* Navigation using anchor tags*/}

          {/* <a href='./'>Home</a>
          <a href='./about'>About</a>
          <a href='./profile'>Profile</a> */}

          {/* Navigation using NavLink tags*/}
          {/* <NavLink to="/" end activeClassName>Home</NavLink>
          <NavLink to="/about" activeClassName>About</NavLink>
          <NavLink to="/Profile" activeClassName>Profile</NavLink>
          <NavLink to="/User" activeClassName>Login</NavLink> */}


        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/User" element={<User />} />
          <Route path="/Successlogin" element={<Successlogin />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </>
  );

}
