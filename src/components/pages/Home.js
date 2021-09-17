import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HerSection';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';


function Home() {
  return (
    <>
      <HeroSection />


      <ImageSlider slides={SliderData} />
      
      <Cards />
      <Footer />
    </>
  );
}

export default Home;