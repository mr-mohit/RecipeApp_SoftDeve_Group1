import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarElement.css'


const Navbar2 = () => {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Zoodle</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about">About |</Nav.Link>
                    <Nav.Link href="#link">Sign In |</Nav.Link>
                    <Nav.Link href="#link2">Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navbar2
