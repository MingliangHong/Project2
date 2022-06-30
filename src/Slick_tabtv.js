import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Poster_name_score from "./Poster_name_score";
const responsive  = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
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
function Slick_tabtv() {
    return (
    <Carousel className="carousel" responsive={responsive}>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/8jhBnqVT8azwJ-tUTOvz7hU9NfU=/206x305/v2/https://resizing.flixster.com/SFfLVmXdiFhntYdVoYo2hyBJn9U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMzRiYTc0NzUtZjJhNS00ZTlhLWI4ODMtY2MxNWNjMWU1ZjJmLmpwZw==" name={"tv_name"} score={5.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/dBSsLM0MPl0D1tr8g_UTnctWNzI=/206x305/v2/https://resizing.flixster.com/ns-__7H8xX7XTDQGW3YRc2bcBuk=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvODAxZmM2N2QtNTQ4ZC00OTE0LThlODItN2FkZWI4M2FiYWY0LmpwZw==" name={"tv_name"} score={4.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/CzGSVjJeg8yFD-sttP3mkLSVuxw=/206x305/v2/https://flxt.tmsimg.com/assets/p10182728_b_v13_bd.jpg" name={"tv_name"} score={3.8}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/X7pMFytzo7cPQLGZmmQm8YwtH8Y=/206x305/v2/https://flxt.tmsimg.com/assets/p9691630_b_v8_ag.jpg" name={"tv_name"} score={4.7}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/S9avaJq_hKgj_lt8nphqPV5FqAE=/206x305/v2/https://flxt.tmsimg.com/assets/p8553063_b_v13_ax.jpg" name={"tv_name"} score={5.0}></Poster_name_score>
        </div>
        <div>
          <Poster_name_score src = "https://resizing.flixster.com/V4UHVIxoeggC1PHMV9bs2G_mVOM=/206x305/v2/https://flxt.tmsimg.com/assets/p14159582_b_v12_au.jpg" name={"tv_name"} score={4.6}></Poster_name_score>
        </div>
    </Carousel>
    );
}
export default Slick_tabtv;