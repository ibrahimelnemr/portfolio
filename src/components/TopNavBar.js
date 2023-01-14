import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';


function TopNavBar() {
    return(
        <>
        <Container className="w-100">
        <Navbar className ="column justify-content-end">
        <Nav className="">
            
            <Nav.Link href="#about">About</Nav.Link>
            
            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#skills">Skills</Nav.Link>

            <Nav.Link href="#certifications">Certifications</Nav.Link>
            
            <Nav.Link href="#resume">Resume</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>

      </Nav>
      </Navbar>
      </Container>
      
      </>
    );
}

export default TopNavBar