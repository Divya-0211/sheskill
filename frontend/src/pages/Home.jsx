import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import intro from "../assets/intro.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>SheSkill</h1>
        <p>
          A safe women-only platform to showcase skills,
          connect with others, and grow together.
        </p>

        <div className="hero-buttons">
          <Link to="/explore" className="btn primary">
            Explore Talents
          </Link>
          <Link to="/profile" className="btn secondary">
            Create Profile
          </Link>
        </div>
      </div>
      <div className="video-container" style={{padding:"2rem"}}>
        <video controls width="15%" height="50%">
          <source src={intro} type="video/mp4"/>
        </video>

      </div>
      <h2 className="she">Why you need Us👆🏻</h2>
      <div className="features">
        <div className="feature-card">
          <h3>Showcase Skills</h3>
          <p>Post your talents and get discovered.</p>
        </div>

        <div className="feature-card">
          <h3>Safe Connections</h3>
          <p>Women-only community with admin moderation.</p>
        </div>

        <div className="feature-card">
          <h3>Grow Together</h3>
          <p>Support, collaborate, and build confidence.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
