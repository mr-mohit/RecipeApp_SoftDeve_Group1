import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarElement.css'


const Navbar2 = () => {
    return (
        <div className="App">
           <div>
           <img src="background.jpeg" className='background' alt=''/>
          </div>
          <div className='title text-dark' >
           Zoodle
          </div>  
          <div className='quote text-dark'>
           "Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet." -Tristram Stuart-
          </div>
        </div>
  )
}

export default Navbar2
