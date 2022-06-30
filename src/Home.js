import GuessTabs from "./GuessTabs";
import Popular_grid from "./Popular_grid";
import Slick_new from "./Slick_new";
const Home = () => {
    return (
        <nav className="home">
            <h1 className="typehead">New & upcoming Movies</h1>
            <Slick_new></Slick_new>
            <h1 className="typehead">Guess you like</h1>
            <GuessTabs/>
            <h1 className="typehead">Popular</h1>
            <Popular_grid></Popular_grid>
        </nav>
    );
}
 
export default Home;