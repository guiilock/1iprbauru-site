import React from 'react';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import Schedule from '../components/home/Schedule';
import LatestSermons from '../components/home/LatestSermons';

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Schedule />
      <LatestSermons />
    </div>
  );
};

export default Home;
