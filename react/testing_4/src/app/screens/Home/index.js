import React from 'react';

import logo from '../../../assets/jest.png';

import FoodList from './components/FoodList';

import './styles.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h1 className="home-title">Welcome to Jest over async actions</h1>
      </header>
      <FoodList />
    </div>
  );
}

export default Home;
