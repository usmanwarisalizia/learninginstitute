import React from 'react';

import Hero from '../components/Hero';
import InteractiveVideo from '../components/InteractiveVideo';
import OurCourses from '../components/OurCourses';
import WhyUsComponent from '../components/WhyUsComponent';

const Home = () => {
  return (
    <>
      <Hero />
      <InteractiveVideo />
      <OurCourses />
      <WhyUsComponent />
    </>
  );
};

export default Home;
