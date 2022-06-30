import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const Poster_name_score = (props) => {
    return (
        <div className="poster_name_score">
            <Link className="slicklink" to="./detailpage">
                <img className="poster" src = {props.src}></img>
                <div className="name_with_score" >
                    <h3>{props.name}</h3>
                    <h3>{props.score}<FcLike/></h3>
                </div>
            </Link>
        </div>
    );
}
export default Poster_name_score;