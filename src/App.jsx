import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from '/src/pages/Home';
import Ielts from './pages/Ielts';
import Pte from './pages/Pte';
import SpokenEnglish from './pages/SpokenEnglish';
import DigitalSkills from './pages/DigitalSkills';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ielts" element={<Ielts />} />
        <Route path="/pte" element={<Pte />} />
        <Route path="/spoken-english" element={<SpokenEnglish />} />
        <Route path="/digital-skills" element={<DigitalSkills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
