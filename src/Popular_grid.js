import { Container, Row, Col } from 'react-grid-system';
import Name_score from './Name_score';
const movielist = [
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    { title:<Name_score name="movie_name" score="5"></Name_score>},
    ];
const tvlist = [
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    { title:<Name_score name="tv_name" score="5"></Name_score>},
    ];
const gamelist = [
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    { title:<Name_score name="game_name" score="5"></Name_score>},
    ];
const Popular_grid = () => {
    return (
        <Container>
            <Row>
                <Col className='col'>
                    <h3>Movies</h3>
                    {movielist.map((item) => (
                        <div>
                            {item.title}
                        </div>
                    ))}
                </Col>
                <Col sm={1}></Col>
                <Col className='col'>
                    <h3>TV</h3>
                    {tvlist.map((item) => (
                        <div>
                            {item.title}
                        </div>
                    ))}                    
                </Col>
                <Col sm={1}></Col>
                <Col className='col'>
                    <h3>Games</h3>
                    {gamelist.map((item) => (
                        <div>
                            {item.title}
                        </div>
                    ))} 
                </Col>
            </Row>
        </Container>
    );
}
 
export default Popular_grid;