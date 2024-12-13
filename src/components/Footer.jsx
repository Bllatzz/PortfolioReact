import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/layouts/_footer.scss';
import { faGithub, faInstagram, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (
    <footer className="footer-custom" >
      <Container fluid className='pt-5 w-50' >
        <Row className="justify-content-around w-100">
          <Col md={4} className="text-start mb-3">
            <h1  className='text-center' >Redes Sociais</h1>
            <ul className="list-unstyled " >
              <li  className="d-flex align-items-center mb-2 fs-3"><a href="https://github.com/Bllatzz" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /> Github</a></li>

              <li  className="d-flex align-items-center mb-2 fs-3"><a href="https://x.com/bllatz" target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={faTwitter}/> Twitter </a></li>
              <li  className="d-flex align-items-center mb-2 fs-3"><a href="https://www.instagram.com/bllatz/" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faInstagram}/> Instagram </a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h1>Contato</h1>
            <ul className="list-unstyled">
              <li className='fs-3 d-flex align-items-center mb-2'> <a href="mailto:bllatz@hotmail.com" target='_blank' rel='noopener noreferrer'> <FontAwesomeIcon icon={faEnvelope} /> Email</a></li>
              <li  className=" fs-3 d-flex align-items-center mb-2"><a href="https://wa.me/+5531996702935" target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</a></li>

            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
