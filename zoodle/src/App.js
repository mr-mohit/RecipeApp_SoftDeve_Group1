//import logo from './logo.svg';

import './App.css';
import React from 'react';
import Navbar2 from './components/navbar/index';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SharedReccipe from './components/navbar/SharedRecipe'
import Index from './components/navbar/index'
function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home |</Nav.Link>
            <Nav.Link href="#about">About |</Nav.Link>
            <Nav.Link href="#link">Sign In |</Nav.Link>
            <Nav.Link href="#link2">Sign Up |</Nav.Link>
            <Nav.Link href="/SharedRecipe">Shared Recipe</Nav.Link>
          </Nav>       
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route render ={()=> <Index />} exact path="/" />
        <Route render ={()=> <SharedReccipe />} path="/SharedRecipe" />
      </Switch>
    </Router>
  );
}

export default App;
