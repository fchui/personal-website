import React from 'react'
import { HeroImageRight } from '../components/HeroImageRight';
import { AboutMe } from '../components/AboutMe';
import { FeaturesCards } from '../components/FeaturesCards'
export const Home = () => {
    return (
        <>
          <HeroImageRight /> 
          <AboutMe />
          <FeaturesCards />
        </>
    );
  };
  

export default Home