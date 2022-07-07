import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarElement.css'


const Navbar2 = () => {
    return (
    //<div className="App">
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Zoodle</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about">About |</Nav.Link>
                    <Nav.Link href="#link">Sign In |</Nav.Link>
                    <Nav.Link href="#link2">Sign Up</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    //</div>
  )
}

export default Navbar2
