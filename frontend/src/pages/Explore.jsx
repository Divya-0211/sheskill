function Explore (){
    const talents=[
        {
            name:"Anjali",
            skill:"Graphic Designer",
            description:"Logo and Social media designing"

        },
        {
            name:"Reshma",
            skill:"Web Developer",
            description:"Create a websites using React"
        },
        {
            name:"Kanishka",
            skill:"Content-Writer",
            description:"Blog and Social media content writer"
        },
        {
            name:"Divyasri",
            skill:"Speaker",
            description:"Nice speaking skill has 4+ language knowledge"

        }
    ];
    return(
        <div>
            <h2>Explore Talents</h2>
            {talents.map((talent,index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h2>{talent.name}</h2>
                    <p><strong>Skill:</strong>{talent.skill}</p>
                    <p>{talent.description}</p>
                </div>
            ))}
        </div>
    );
}
export default Explore;