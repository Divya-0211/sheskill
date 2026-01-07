function Profile() {
  return (
    <div className="page">
      <h2 className="page-title">My Profile</h2>

      <div className="profile-card">
        <img
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt="Profile"
        />

        <h3>Divyasri</h3>
        <p className="skill">Web Developer</p>

        <p className="bio">
          Passionate about building meaningful digital platforms
          that empower women.
        </p>
      </div>
    </div>
  );
}

export default Profile;
