import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './features/home/Home';
import About from './features/about/About';
import Services from './features/services/Services';
import Contact from './features/contact/Contact';
import Splash from './components/splash/Splash';

import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <Splash onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

