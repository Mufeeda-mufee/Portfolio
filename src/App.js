
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import PageHeader from './Components/PageHeader/PageHeader';
import About from './Components/About/about';
import Skills from './Components/Skills/Skills';
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './Components/Contact/Contact';
// import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import { render } from '@testing-library/react';
// import React, { Component } from 'react';



function App() {
 
  return (

    <>
  <NavBar/>
  <PageHeader/>
  <About/>
  <Skills/>
  <Contact/>
   
  
    </>
    
  );
  
}

export default App;
