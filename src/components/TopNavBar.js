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
            <Nav.Link href="#home">Home</Nav.Link>
            
            <Nav.Link href="#features">Features</Nav.Link>
            
            <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar>
      </Container>
      
      </>
    );
}

export default TopNavBar