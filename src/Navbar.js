import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id="logo"> Let's review </h1>
            <input className="searchbox" placeholder="Search"/>
            <div className = "links">
                <Link className="link" to = "/movies"> MOVIES </Link>
                <Link className="link" to = "/tv"> TV </Link>
                <Link className="link" to = "/games"> GAMES </Link>
                <Link className="signlink" to = "/sign"> Sign in </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;