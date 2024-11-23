import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import cardImage from "./assets/chkobba-card.png"; // Image of upside-down cards
import backgroundImage from "./assets/card-game-bg.jpg"; // Background image

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Sidebar for Settings, Light/Dark Mode, and Learn How to Play */}
      <div className="sidebar">
        <ul>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/learn">Learn How to Play</Link></li>
          <li><Link to="/darkmode">Dark Mode</Link></li>
        </ul>
      </div>

      {/* Board and Game Controls */}
      <div className="board-container">
        {/* Table board in the center */}
        <div className="board">
          {/* Upside-down cards in the center */}
          <div className="cards-upside-down">
            <img src={cardImage} alt="Card" className="card" />
            <img src={cardImage} alt="Card" className="card" />
            <img src={cardImage} alt="Card" className="card" />
            <img src={cardImage} alt="Card" className="card" />
          </div>
          {/* Cards closer to the user */}
          <div className="user-cards">
            <img src={cardImage} alt="Card" className="card" />
            <img src={cardImage} alt="Card" className="card" />
            <img src={cardImage} alt="Card" className="card" />
          </div>
        </div>

        {/* Quick Play and Create Game Buttons */}
        <div className="buttons">
          <Link to="/quick-play" className="button">Quick Play</Link>
          <Link to="/create-game" className="button">Create Game</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
