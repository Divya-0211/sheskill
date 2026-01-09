import React from "react";
import "../styles/explore.css";

const talents=[
    {
        name:"Ananya Rishikumar",
        photo:"https://randomuser.me/api/portraits/women/11.jpg",
        skill:"Graphic Designer"
    },
    {
        name:"Reshma Dinesh",
        photo:"https://randomuser.me/api/portraits/women/95.jpg",
        skill:"Photographer"
    },
    {
        name:"Priya Kannan",
        photo:"https://randomuser.me/api/portraits/women/15.jpg",
        skill:"Social Worker"
    },
    {
      name:"Jennifer Aasirvadham",
      photo:"https://randomuser.me/api/portraits/women/19.jpg",
      skill:"Content-Creator"
    },
    {
      name:"Vishva Mithra",
      photo:"https://randomuser.me/api/portraits/women/40.jpg",
      skill:"Social Media Manager"
    }
];

function Explore() {
  return (
    <div className="explore-container">
      <h2 className="explore-title">Explore Talents</h2>

      <div className="card-grid">
        {talents.map((talent,index) =>(
          <div className="talent-card" key={index}>
            <img src={talent.photo} alt={talent.name}/>
            <h3>{talent.name}</h3>
            <p>{talent.skill}</p>
            <button>View Profile</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Explore;
