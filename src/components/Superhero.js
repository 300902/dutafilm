import { Card, Container, Row, Col, Image } from "react-bootstrap";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SuperHero Movies</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image
                src={"/assets/image/super hero/deadpool.jpg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Dead Pool</Card.Title>
                  <Card.Text className="text-left">
                    Wade Wilson (Ryan Reynolds) berusaha melindungi seorang
                    mutan misterius yang diincar Cable (Josh Brolin). Untuk
                    melindunginya, Wade lalu membentuk sebuah tim bernama
                    X-Force yang beranggotakan Deadpool sendiri, Domino,
                    Negasonic Teenage Warhead, Colossus, dan Bedlam.
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
                src={"/assets/image/super hero/avengers.jpg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Avengers Endgame
                  </Card.Title>
                  <Card.Text className="text-left">
                    Melanjutkan Avengers Infinity War, dimana kejadian setelah
                    Thanos berhasil mendapatkan semua infinity stones dan
                    memusnahkan 50% semua mahluk hidup di alam semesta. Akankah
                    para Avengers berhasil mengalahkan Thanos?
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
                src={"/assets/image/super hero/Garuda.jpeg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Shazam</Card.Title>
                  <Card.Text className="text-left">
                    Billy Batson, seorang anak yatim berusia 14 tahun yang
                    bermasalah yang tinggal di Philadelphia, diatur untuk pindah
                    ke rumah asuh baru - yang ketujuh berturut-turut - dengan
                    keluarga Vazquez dan lima anak asuh lainnya. Suatu hari,
                    Billy naik mobil subway dan menemukan dirinya diangkut ke
                    dunia yang berbeda di mana penyihir kuno memberinya
                    kekuatan...
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
                src={"/assets/image/super hero/ShangCi.jpg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Shang Ci</Card.Title>
                  <Card.Text className="text-left">
                    Shang-Chi (Simu Liu) harus menghadapi masa lalunya sebelum
                    ia memilih untuk meninggalkan dan bergabung ke dalam sebuah
                    organisasi bernama Ten Rings.
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
                src={"/assets/image/super hero/spiderman.jpg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Spiderman</Card.Title>
                  <Card.Text className="text-left">
                    Peter Parker beraksi memerangi kejahatan sebagai sosok
                    Spider-Man di Manhattan. Oscorp, milik sahabat masa
                    kecilnya, Harry Osborn, mulai melepaskan musuh-musuh
                    rekayasa genetika untuk menyerangnya.
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
                src={"/assets/image/super hero/ironman.jpg"}
                alt="Agaklaen Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Iron Man 3</Card.Title>
                  <Card.Text className="text-left">
                    Industrialis brilian Tony Stark / Iron Man menghadapi musuh
                    yang tak kenal batas. Dunia Tony dihancurkan dan ia
                    menyelidiki siapa yang bertanggung jawab untuk kerusakan
                    tersebut. Berbekal peralatan dan instingnya, Tony berusaha
                    menyelamatkan orang-orang yang dikasihinya. Pertanyaan lama
                    kembali menghantuinya; apakah manusia yang membuat baju Iron
                    Man atau baju tersebut yang menentukan identitasnya sebagai
                    manusia?
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

export default SuperHero;
