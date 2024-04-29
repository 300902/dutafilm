import { Col, Container, Row } from 'react-bootstrap';
const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">Welcome to DutaFilm</div>
              <div className="title">The best place to watch movies online</div>
              <div className="introButton mt-3 text-center">
                </div>
            </Col>            
          </Row>
        </Container>
      </div>
    );
}

export default Intro;