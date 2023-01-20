import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1 className="homeHeader">Welcome to the Todo List</h1>
        <Button variant="outline-primary" className="btn" onClick={() => {navigate('/main')}} >Get Started</Button>{' '}
    </div>
  )
}

export default Home