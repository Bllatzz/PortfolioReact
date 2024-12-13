import React from "react";
import "../assets/pages/_home.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';
import svgImage from '/home_svg.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Container className="home-container">
        <Row>
          <Col md={6} className="text-section">
            <h1>Olá, sou o </h1>
            <p><strong>João Pedro Dias</strong></p>
            <h3>Dev Full Stack</h3>
            
            <Button as={Link} to="/about" className="d-flex align-items-center justify-content-center mt-3">Saiba mais sobre mim</Button>
          </Col>
          <Col md={6} className="image-section">
            <img src={svgImage} alt="svg-image.svg" className="svg-image"/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
