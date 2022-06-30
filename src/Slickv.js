import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import ReactPlayer from "react-player";
const responsive  = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
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
function Slickv() {
    return (
        <Carousel className="carousel" responsive={responsive}>
            <ReactPlayer width='480px' url={'https://www.youtube.com/watch?v=HhIl_XJ-OGA'}></ReactPlayer>
            <ReactPlayer width='480px' url={'https://www.youtube.com/watch?v=HhIl_XJ-OGA'}></ReactPlayer>
            <ReactPlayer width='480px' url={'https://www.youtube.com/watch?v=HhIl_XJ-OGA'}></ReactPlayer>
            <ReactPlayer width='480px' url={'https://www.youtube.com/watch?v=HhIl_XJ-OGA'}></ReactPlayer>
        </Carousel>
        
    );
}

export default Slickv;