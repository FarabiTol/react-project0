import React from 'react';
import './App.css';
import Char from './components/Char'
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
         <Route exact path="/" element={<Char />} />
         <Route exact path="*" element={<Char />} />
       </Routes>
    </div>
  );
}

export default App;
