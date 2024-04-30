import { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import gambar1Image from "../assets/image/carousels/gambar1.jpg";
import gambar2Image from "../assets/image/carousels/gambar2.jpg";
import gambar3Image from "../assets/image/carousels/gambar3.jpg";
import gambar4Image from "../assets/image/carousels/gambar4.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="page">
      <Row>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar1Image}
                alt="First slide"
              />
              <Carousel.Caption style={{ textAlign: 'left', top: '60%', transform: 'translateY(-50%)' }}>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar2Image}
                alt="Second slide"
              />
              <Carousel.Caption style={{ textAlign: 'left', top: '60%', transform: 'translateY(-50%)' }}>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar3Image}
                alt="Third slide"
              />
              <Carousel.Caption style={{ textAlign: 'left', top: '60%', transform: 'translateY(-50%)' }}>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gambar4Image}
                alt="Third slide"
              />
              <Carousel.Caption style={{ textAlign: 'left', top: '60%', transform: 'translateY(-50%)' }}>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ControlledCarousel;
