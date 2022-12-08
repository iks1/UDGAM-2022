import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Events from "./../src/pages/Events";

function App() {
  return (
    <>
          {/*Home */} 
          {/*Events */
            <Events/>
          } 
          
          {/*Speakers */} 
          {/* Past Speakers*/} 
          {/* Merch*/} 
          {/* Get Ticket*/}
          {/* Footer*/} 
    </>     
        
      
    
  );
}

export default App;
