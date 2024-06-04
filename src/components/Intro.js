import { useState } from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
// import gambar1Image from "../assets/image/carousels/gambar1.jpg";
// import gambar2Image from "../assets/image/carousels/gambar2.jpg";
// import gambar3Image from "../assets/image/carousels/gambar3.jpg";
// import gambar4Image from "../assets/image/carousels/gambar4.jpg";

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
                src={"/assets/image/carousels/gambar1.jpg"}
                alt="First slide"
              />
              <Carousel.Caption
                style={{
                  textAlign: "left",
                  top: "60%",
                  transform: "translateY(-50%)",
                }}
              >
                <h3>Marvel Avengers</h3>
                <p>
                  Ketika musuh yang tak terduga muncul, mengancam keselamatan
                  dan keamanan dunia, Nick Fury, direktur Badan Perdamaian
                  Internasional, dikenal sebagai S.H.I.E.L.D. , membutuhkan tim
                  untuk menyelamatkan dunia dari bencana. Usaha perekrutan pun
                  dimulai Iron Man, Captain America, Hulk, Thor, Black Widow dan
                  Hawkeye dikumpulkan untuk menaklukkan Dewa Kehancuran, Loki,
                  dalam usahanya menghancurkan bumi. Dengan semua gabungan
                  kekuatan, tugas nampak lebih mudah. Namun kenyatannya tidak
                  demikian! Para pahlawan super justru saling melawan satu sama
                  lain Hulk melawan Captain America, siapa yang akan menang?
                  Apakah Iron Man dapat mengalahkan kekuatan super milik Thor?
                  Bagaimana para pahlawan super ini secara bersama-sama
                  menghadapi bencana, melindungi masyarakat dan yang terpenting,
                  bertahan hidup?
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/assets/image/carousels/gambar2.jpg"}
                alt="Second slide"
              />
              <Carousel.Caption
                style={{
                  textAlign: "left",
                  top: "60%",
                  transform: "translateY(-50%)",
                }}
              >
                <h3>A Quite Place</h3>
                <p>
                  Sebuah keluarga hidup dalam ketakutan. Mereka berusaha harus
                  hidup dalam keheningan agar terhindar dari mahluk misterius.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/assets/image/carousels/gambar3.jpg"}
                alt="Third slide"
              />
              <Carousel.Caption
                style={{
                  textAlign: "left",
                  top: "60%",
                  transform: "translateY(-50%)",
                }}
              >
                <h3>The Amazing Spiderman-2</h3>
                <p>
                  Peter Parker beraksi memerangi kejahatan sebagai sosok
                  Spider-Man di Manhattan. Oscorp, milik sahabat masa kecilnya,
                  Harry Osborn, mulai melepaskan musuh-musuh rekayasa genetika
                  untuk menyerangnya.
                </p>
                <Button variant="primary">Play</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={"/assets/image/carousels/gambar4.jpg"}
                alt="Third slide"
              />
              <Carousel.Caption
                style={{
                  textAlign: "left",
                  top: "60%",
                  transform: "translateY(-50%)",
                }}
              >
                <h3>Batman vs Superman</h3>
                <p>
                  Bruce Wayne menganggap Superman sebagai ancaman bagi umat
                  manusia - karena kekuatannya tak terkendali. Ia pun memutuskan
                  untuk melindungi dunia dan melawannya - dari balik sosok
                  superhero Batman.
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
