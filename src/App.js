import React, { useState, useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Navbar';
import Home from './home/Home';
import Carts from './carts/Carts';
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </Router>
  );
}
