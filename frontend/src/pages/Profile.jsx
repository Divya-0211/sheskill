import React from "react";
import "../styles/profile.css"

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt="Profile"
        />
        <h2>Divyasri</h2>
        <p className="role">Aspring Web Developer</p>
        <div className="skills">
          <span>React</span>
          <span>UI Design</span>
          <span>CSS</span>
        </div>
        <p className="bio">
          Passionate about building meaningful digital platforms
          that empower women.
        </p>
        <button>Edit Profile</button>
      </div>
      </div>
  );
};

export default Profile;
