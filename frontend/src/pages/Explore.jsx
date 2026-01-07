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
    }
];

const Explore = () => {
    return (
        <div style={{padding:"2rem"}}>
            <h2>Explore Talents</h2>
            <div  style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {talents.map((talent, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              textAlign: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={talent.photo}
              alt={talent.name}
              style={{ width: "100px", borderRadius: "50%" }}
            />
            <h3>{talent.name}</h3>
            <p>{talent.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Explore;
