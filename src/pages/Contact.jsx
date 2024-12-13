import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../assets/pages/_contacts.scss';
import '../assets/styles/base/_reset.scss';

function Contact() {
  return (
    <main>
      <Container fluid className='pt-5'>
        <Row className="justify-content-center ">
          <Col md={6} className="text-center">
            <h1 className="mb-4">Entre em Contato</h1>
            <p className="mb-5">Fique à vontade para entrar em contato comigo através das seguintes opções:</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="contact-info d-flex gap-5 justify-content-center">
            <Row className="mb-4">
              <Col xs={2} className="text-right">
              <a href="mailto:bllatz@hotmail.com" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>
              </Col>
            
            </Row>
            <Row className="mb-4">
              <Col xs={2} className="text-right">
              <a href="https://wa.me/+5531996702935" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} className="icon"  />
              </a>
                
              </Col>
              
            </Row>
            <Row className="mb-4">
              <Col xs={2} className="text-right">
              <a href="https://github.com/Bllatzz" target='_blank' rel='noopener noreferrer'>  <FontAwesomeIcon icon={faGithub} className="icon" /></a>
              
              </Col>
              
            </Row>
            <Row className="mb-4">
              <Col xs={2} className="text-right">
              <a href="https://twitter.com/Bllatz" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
              </Col>
              
            </Row>
            <Row>
              <Col xs={2} className="text-right">
              <a href="https://instagram.com/Bllatz" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram} className="icon" /></a>

              </Col>
             
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
