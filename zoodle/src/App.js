//import logo from './logo.svg';

import './App.css';
import React from 'react';
import Navbar2 from './components/navbar/index';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <div>
        <img src="background.jpeg" className='background' alt=''/>
      </div>
      <div className='title'>
        Zoodle
      </div>  
      <div className='quote'>
        "Cutting food wate is a delicious way of saving money, helping to feed the world and protect the planet." -Tristram Stuart-
      </div>
    </div>
    
    // <div className="App">
    
      
    // <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

        
    //   </header>
    // </div>
  );
}

export default App;
