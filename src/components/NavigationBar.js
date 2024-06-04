import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Globe, Home, Calendar, Film } from "react-feather";
import axios from "axios";


function NavScrollExample() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
          query: searchTerm
        }
      });

      // Replace this with the actual logic to display the movies
      console.log(response.data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontFamily: "Bebas Neue" }}>
          DUTAFILM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="home">
              <Home />
            </div>
            <Nav.Link href="/">Home</Nav.Link>
            <div className="film">
              <Film />
            </div>

            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#trending">Trending</NavDropdown.Item>
              <NavDropdown.Item href="#superhero">SuperHero</NavDropdown.Item>
              <NavDropdown.Item href="#horror">Horor</NavDropdown.Item>
            </NavDropdown>

            <div className="globe">
              <Globe />
            </div>

            <NavDropdown title="Negara" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Indonesia</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Japan</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Philippines</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Thailand</NavDropdown.Item>
              <NavDropdown.Item href="#action7">UK</NavDropdown.Item>
              <NavDropdown.Item href="#action8">USA</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Korea</NavDropdown.Item>
              <NavDropdown.Item href="#action10">China</NavDropdown.Item>
              <NavDropdown.Item href="#action11">India</NavDropdown.Item>
            </NavDropdown>

            <div className="calendar">
              <Calendar />
            </div>
            <NavDropdown title="Tahun" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">2000</NavDropdown.Item>
              <NavDropdown.Item href="#action4">2001</NavDropdown.Item>
              <NavDropdown.Item href="#action5">2002</NavDropdown.Item>
              <NavDropdown.Item href="#action6">2003</NavDropdown.Item>
              <NavDropdown.Item href="#action7">2004</NavDropdown.Item>
              <NavDropdown.Item href="#action8">2005</NavDropdown.Item>
              <NavDropdown.Item href="#action9">2006</NavDropdown.Item>
              <NavDropdown.Item href="#action10">2007</NavDropdown.Item>
              <NavDropdown.Item href="#action11">2008</NavDropdown.Item>
              <NavDropdown.Item href="#action12">2009</NavDropdown.Item>
              <NavDropdown.Item href="#action13">2010</NavDropdown.Item>
              <NavDropdown.Item href="#action14">2011</NavDropdown.Item>
              <NavDropdown.Item href="#action15">2012</NavDropdown.Item>
              <NavDropdown.Item href="#action16">2013</NavDropdown.Item>
              <NavDropdown.Item href="#action17">2014</NavDropdown.Item>
              <NavDropdown.Item href="#action18">2015</NavDropdown.Item>
              <NavDropdown.Item href="#action19">2016</NavDropdown.Item>
              <NavDropdown.Item href="#action20">2017</NavDropdown.Item>
              <NavDropdown.Item href="#action21">2018</NavDropdown.Item>
              <NavDropdown.Item href="#action22">2019</NavDropdown.Item>
              <NavDropdown.Item href="#action23">2020</NavDropdown.Item>
              <NavDropdown.Item href="#action24">2021</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
