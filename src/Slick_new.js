import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Poster_name_score from "./Poster_name_score";
const responsive  = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
}
function Slick_new() {
    return (
    <Carousel className="carousel" responsive={responsive}>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg" name={"movie-name"} score={5.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg" name={"movie-name"} score={4.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/en/f/f9/Lightyear_%28film%29_poster.jpg" name={"movie-name"} score={3.8}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg" name={"movie-name"} score={4.7}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg" name={"movie-name"} score={5.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://upload.wikimedia.org/wikipedia/zh/4/48/The_Black_Phone_poster.jpg" name={"movie-name"} score={4.6}></Poster_name_score>
        </div>
    </Carousel>
    );
}
export default Slick_new;