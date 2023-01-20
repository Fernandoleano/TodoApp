import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Main from './components/Main/Main';
import NavBar from './components/TopBar/NavBar';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/home" element={<Home />} />
            <Route  path="/main" element={<Main />} />
            <Route  path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App
