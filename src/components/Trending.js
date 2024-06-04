import { useEffect, useState } from 'react';    
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
// import agaklaenImage from '../assets/image/trending/AgakLaen.jpeg';
// import dilanaImage from '../assets/image/trending/Dilan1990.jpeg';
// import dilaniImage from '../assets/image/trending/Dilan1991.jpeg';
// import kknImage from '../assets/image/trending/KKN.jpeg';
// import pengabdisetanImage from '../assets/image/trending/PengabdiSetan2.jpeg';
// import warkopdkiImage from '../assets/image/trending/WarkopDKI.jpeg';
import axios from "axios";

const Trending = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
        .then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    return (
        <div>
            <Container >
                <br />
                <h1 className="text-white">Trending Movies</h1>
                <br />  
                <Row>
                    {movies.map((result, index) => {
                        console.log(result)
                        return (
                            <Col md={4} className="movieWrapper" id="trending" key={index}>
                                <Card className="movieImage">
                                    <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images" />
                                    <div className="bg-dark">
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.title}</Card.Title>
                                            <Card.Text className="text-left">
                                            {result.overview}
                                            </Card.Text>
                                            <Card.Text className="text-left">{result.release_date}</Card.Text>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                    {/* <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={agaklaenImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Agak Laen Movies</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={dilanaImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dilan 1990</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={dilaniImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dilan 1991</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={kknImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">KKN Desa Penari</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={pengabdisetanImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Pengabdi Setan 2</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={warkopdkiImage} alt="Agaklaen Movies" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Warkop DKI</Card.Title>
                                    <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Trending;