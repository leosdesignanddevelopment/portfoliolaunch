import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import "../../css/navbar.css";

function Navigation() {
  return (
    <Navbar  expand="lg" className='nav' >
    <Container>
      <Navbar.Brand href="#home" className=' brand'>Omar Morales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
        <Nav className="ml-auto ">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#specialties">Specialties</Nav.Link>
          <Nav.Link href="#mySkills">Skills</Nav.Link>
          <Nav.Link href="#myWork">My Work</Nav.Link>
          <Nav.Link href="#contact" className='contact'>Contact</Nav.Link>



        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navigation