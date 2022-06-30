const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 id="logo"> Let's review </h1>
            <input className="searchbox" placeholder="Search"/>
            <div className = "links">
                <a className="link" href = "/movies"> MOVIES </a>
                <a className="link" href = "/tv"> TV </a>
                <a className="link" href = "/games"> GAMES </a>
                <a className="signlink"href = "/sign"> Sign in </a>
            </div>
        </nav>
    );
}
 
export default Navbar;