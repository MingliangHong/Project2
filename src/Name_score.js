import { FcLike } from "react-icons/fc";
const Name_score = (props) => {
    return (
        <a className="name_with_score" href=".#/detailpage">
            <h3>{props.name}</h3>
            <h3>{props.score}<FcLike/></h3>
        </a>
    );
}
 
export default Name_score;