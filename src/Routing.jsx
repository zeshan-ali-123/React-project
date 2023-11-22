import React from 'react';
import Home from './Components/Home';
import Work from './Components/Work';
import About from './Components/About';
import Loginpage from './Components/Login';
import { Routes, Route } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/About" element={<About />} />
      <Route path='/Login' element={<Loginpage/>}/>
    </Routes>
  );
};