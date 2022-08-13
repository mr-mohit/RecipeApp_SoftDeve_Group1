//import logo from './logo.svg';

import './App.css';
import './assets/styles/index.scss';
import React from 'react';
import DefaultLayout from './components/DefaultLayout';
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RecipiesPage from './pages/RecipiesPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalorieIntakePage from './pages/CalorieIntakePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout child={<HomePage/>}/>}></Route>
          <Route path="/calorie-intake" element={<DefaultLayout child={<CalorieIntakePage/>}/>}></Route>
          <Route path="/recipies" element={<DefaultLayout child={<RecipiesPage/>}/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/signup" element={<SignupPage/>}></Route>
        </Routes>
		  </BrowserRouter>
    </div>
  );
}

export default App;
