import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
const Name_score = (props) => {
    return (
        <Link className="name_with_score" tp="./detailpage">
            <h3>{props.name}</h3>
            <h3>{props.score}<FcLike/></h3>
        </Link>
    );
}
 
export default Name_score;