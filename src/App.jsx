import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';

import Home from '/src/pages/Home';
import Ielts from '/src/pages/Ielts';
import Pte from '/src/pages/Pte';
import SpokenEnglish from '/src/pages/SpokenEnglish';
import DigitalSkills from '/src/pages/DigitalSkills';
import Contact from '/src/pages/Contact';

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
