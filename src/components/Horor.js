import { Card, Container, Row, Col, Image } from "react-bootstrap";
import mangkujiwoImage from "../assets/image/horor/it.jpg";
import danurImage from "../assets/image/horor/danur.jpg";
import ghibahImage from "../assets/image/horor/ghibah.jpg";
import penjamuaniblisImage from "../assets/image/horor/midsommar.jpg";
import sewudinoImage from "../assets/image/horor/exorcist.jpg";
import siksakuburImage from "../assets/image/horor/conjuring.jpg";

const Horor = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Horror Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="horror">
            <Card className="movieImage">
              <Image
                src={mangkujiwoImage}
                alt="Mangkujiwo Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">It Chapter 2</Card.Title>
                  <Card.Text className="text-left">
                    Seri kedua akan melanjutkan kisah para anggota Losers Club.
                    Dua puluh tujuh tahun setelah pertemuan pertama mereka
                    dengan Pennywise yang menakutkan, Losers Club telah dewasa
                    dan berpisah. Sampai sebuah panggilan telepon membawa Losers
                    Club kembali untuk bertemu hantu kelam dari masa lalu
                    mereka.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={danurImage} alt="Danur Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Hereditary</Card.Title>
                  <Card.Text className="text-left">
                    Ketika ibu dari keluarga Graham meninggal, keluarga anak
                    perempuannya mulai dihantui oleh rahasia yang misterius dan
                    menakutkan tentang nenek moyang mereka. Semakin mereka
                    berusaha mencari tahu, semakin mereka terancam oleh takdir
                    yang mengerikan ini.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={ghibahImage} alt="Ghibah Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Insidious</Card.Title>
                  <Card.Text className="text-left">
                    Josh dan dan Renai Lambert pindah ke sebuah mansion baru
                    bersama ke-tiga anak mereka. Keadaan berubah mengerikan
                    ketika Dalton dan anak mereka, terjatuh dan koma setelah
                    serangan misterius di loteng.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={penjamuaniblisImage}
                alt="Penjamuaniblis Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Midsommar</Card.Title>
                  <Card.Text className="text-left">
                    Saat hubungan keduanya tengah bermasalah, sepasang kekasih
                    muda dari Amerika Serikat melancong ke sebuah festival
                    tengah musim panas Swedia, di mana tempat yang tampak
                    seperti surga permai berubah menjadi mimpi buruk yang
                    mengerikan, seiring warga setempat mulai menunjukkan niat
                    bengis mereka.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={sewudinoImage}
                alt="Sewudino Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Exorcist</Card.Title>
                  <Card.Text className="text-left">
                    Kepercayaan Merrin pada Tuhan tertebus setelah dia pergi ke
                    Afrika Timur untuk mengekskavasi sebuah gereja. Seorang
                    bocah lelaki yang dirasuki iblis menjadikan satu-satunya
                    jalan terang baginya.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={siksakuburImage}
                alt="Siksakubur Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Conjuring 2</Card.Title>
                  <Card.Text className="text-left">
                    Ketika suami istri Rod dan Carolyn menyadari bahwa keluarga
                    mereka tengah diganggu oleh roh jahat - keduanya pun
                    akhirnya meminta bantuan pada pasangan ahli supranatural
                    untuk menyelidiki masalah ini.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Horor;
