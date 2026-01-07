import React from "react";

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
    }
];

function Explore() {
  return (
    <div className="page">
      <h2 className="page-title">Explore Talents</h2>
      <p className="page-subtitle">
        Discover inspiring women and their skills
      </p>

      <div className="card-grid">
        {talents.map((talent, index) => (
          <div className="card" key={index}>
            <img src={talent.photo} alt={talent.name} />
            <h3>{talent.name}</h3>
            <p className="skill">{talent.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
