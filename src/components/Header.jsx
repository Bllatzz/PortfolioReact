import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/styles/layouts/_header.scss';

function Header() {
  const navStyle = {
    margin: 'auto',
    width: '40%',
  };

  const navLinkStyle = {
    fontSize: '1.8rem',
    margin: '0 10px',
    color: 'white',
  };

  return (
    <Navbar variant="dark" expand="lg" className="navBar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navBar-toggle" style={{ margin: '20px auto' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={navStyle}>
          <Nav.Link as={Link} to="/" style={navLinkStyle} className="navLink">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={navLinkStyle} className="navLink">Sobre</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={navLinkStyle} className="navLink">Contatos</Nav.Link>
          <Nav.Link as={Link} to="/projects" style={navLinkStyle} className="navLink">Projetos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
