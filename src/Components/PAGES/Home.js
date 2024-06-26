import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutUs from "../AboutUs";
import AllBrands from "../AllBrands";
import Brands from "../Brand";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
        <AboutUs/>
        <Brands/>
        <AllBrands/>
      <Footer />
    </>
  );
}

export default Home;
