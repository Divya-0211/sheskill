import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="app-header">
      <h1 className="logo">SheSkill</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Header;
