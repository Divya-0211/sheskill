import {Link} from "react-router-dom";

function Header (){
    return(
        <header style={{padding:"16px", borderBottom:"1px solid #ccc"}}>
            <h2>SheSkill</h2>
            <nav>
                <Link to="/" style={{marginRight:"12px"}}>Home</Link>
                <Link to="/explore" style={{marginRight:"12px"}}>Explore</Link>
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}
export default Header;