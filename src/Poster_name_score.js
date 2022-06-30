import { FcLike } from "react-icons/fc";
const Poster_name_score = (props) => {
    return (
        <div className="poster_name_score">
            <a className="slicklink" href=".#/detailpage">
                <img className="poster" src = {props.src}></img>
                <div className="name_with_score" >
                    <h3>{props.name}</h3>
                    <h3>{props.score}<FcLike/></h3>
                </div>
            </a>
        </div>
    );
}
export default Poster_name_score;