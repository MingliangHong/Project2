import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const responsive  = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
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
function Slickp() {
    return (
        <Carousel className="carousel" responsive={responsive}>
            <img width={'800px'} src="https://resizing.flixster.com/tprPep6nrtTbCLgbQzBe5GxQ7-0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmOGQ1MjdkLTFlOTItNDg4NC05MDAwLWFkZGE4Mjg5MjhkNS5qcGc="></img>
            <img width={'800px'} src="https://resizing.flixster.com/tprPep6nrtTbCLgbQzBe5GxQ7-0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmOGQ1MjdkLTFlOTItNDg4NC05MDAwLWFkZGE4Mjg5MjhkNS5qcGc="></img>
            <img width={'800px'} src="https://resizing.flixster.com/tprPep6nrtTbCLgbQzBe5GxQ7-0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmOGQ1MjdkLTFlOTItNDg4NC05MDAwLWFkZGE4Mjg5MjhkNS5qcGc="></img>
            <img width={'800px'} src="https://resizing.flixster.com/tprPep6nrtTbCLgbQzBe5GxQ7-0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmOGQ1MjdkLTFlOTItNDg4NC05MDAwLWFkZGE4Mjg5MjhkNS5qcGc="></img>
            <img width={'800px'} src="https://resizing.flixster.com/tprPep6nrtTbCLgbQzBe5GxQ7-0=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FmOGQ1MjdkLTFlOTItNDg4NC05MDAwLWFkZGE4Mjg5MjhkNS5qcGc="></img>

        </Carousel>
    );
}

export default Slickp;