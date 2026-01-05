import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('../components/Hero'));
const InteractiveVideo = lazy(() => import('../components/InteractiveVideo'));
const OurCourses = lazy(() => import('../components/OurCourses'));
const WhyUsComponent = lazy(() => import('../components/WhyUsComponent'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <InteractiveVideo />
      <OurCourses />
      <WhyUsComponent />
    </Suspense>
  );
};

export default Home;
