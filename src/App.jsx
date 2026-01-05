import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Ielts = lazy(() => import('./pages/Ielts'));
const Pte = lazy(() => import('./pages/Pte'));
const SpokenEnglish = lazy(() => import('./pages/SpokenEnglish'));
const DigitalSkills = lazy(() => import('./pages/DigitalSkills'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ielts" element={<Ielts />} />
          <Route path="/pte" element={<Pte />} />
          <Route path="/spoken-english" element={<SpokenEnglish />} />
          <Route path="/digital-skills" element={<DigitalSkills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
