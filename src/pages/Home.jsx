import React from 'react';
import Hero from '/src/components/Hero';
import InteractiveVideo from '/src/components/InteractiveVideo';
import OurCourses from '/src/components/OurCourses';
import WhyUsComponent from '/src/components/WhyUsComponent';

const Home = () => {
  return (
    <>
      <Hero />
      <InteractiveVideo />
      <OurCourses />
      <WhyUsComponent />
    </>
  );
}

export default Home;
