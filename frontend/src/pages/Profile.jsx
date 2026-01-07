function Profile (){
    const user= {
        name:"Divyasri",
        photo:"https://randomuser.me/api/portraits/women/43.jpg",
        title:"Frontend Developer",
        bio:"Passionate about building user-friendly web applications",
        skills:["React","JavaScript","HTML","CSS"]
    };
    return (
        <div style={{padding:"2renm"}}>
            <h2>My Profile</h2>

            <div>
                <img 
                src={user.photo}
                alt={user.name}
                style={{width:"120px",borderRadius:"50%"}}
                />
                <h3>{user.name}</h3>
                <p><strong>{user.title}</strong> </p>
                <p>{user.bio}</p>

                <h4>Skills</h4>
                <ul>
                    {user.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Profile;