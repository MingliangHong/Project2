import { Container, Row, Col } from 'react-grid-system';
import Slickp from './Slickp';
import Slickv from './Slickv';
import Userreview from './Userreview';
const reviewlist = [
    { title:<Userreview></Userreview>},
    { title:<Userreview></Userreview>},
    { title:<Userreview></Userreview>},
    { title:<Userreview></Userreview>},
    { title:<Userreview></Userreview>},
    { title:<Userreview></Userreview>},

];
const Detailpage = () => {
    return (
        <div className="detailpage">
            <Container>
                <Row>
                    <Col md={7} className="dleft">
                        <h1>Name</h1>
                        <h3>Year / Rate / Runtime</h3>
                        <Container >
                            <Row className='dleftin'>
                                <Col>
                                    <img src='https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg'></img>
                                </Col>
                                <Col>
                                    <h3 className='detailin'>Director:</h3>
                                    <h3 className='detailin'>Genre(s):</h3>
                                    <h3 className='detailin'>Stars:</h3>
                                    <h3 className='detailin'>Summary:</h3>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={5} className="dright">
                        <div className='scoregroup'>
                            <h1 className='scoreword'>Score:</h1>
                            <h1 className="score">5.0</h1>
                        </div>
                        <div className='review'>
                            Rate and Review: <span className='reviewscore'><input className='ratebox' placeholder=''></input> /5</span>
                            <div>
                            <input className='comment' placeholder='Comments'></input>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <h1 className='detailhead'> Videos </h1>
            <Slickv></Slickv>
            <h1 className='detailhead'> Photos </h1>
            <Slickp></Slickp>
            <h1 className='detailhead'> User Reviews </h1>
            {reviewlist.map((item) => (
                <div>
                    {item.title}
                </div>
            ))} 
        </div>
    );
}

export default Detailpage;