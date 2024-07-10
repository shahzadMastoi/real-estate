'use client'
import LogoSection from './CommonComponents/our partners/partner';
import Whyus from './CommonComponents/WhyUs/whyus';
import FeatureProperty from './CommonComponents/FeaturedProperties/FeatureProperty';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import Videoplay from './CommonComponents/videoPlayComponents/videoplay';
import BlogPost from './CommonComponents/Blog/BlogPost';
import CitiesSlider from './CommonComponents/NeighborhoodCities/CitiesSlider';
import Popularproperties from './CommonComponents/popularProperties/PolpularProperties';
import Reviews from './CommonComponents/Reviews/Reviews';
import GetListed from './CommonComponents/GetListed/GetListed';
import VideoPLay2 from './CommonComponents/videoPlayComponents/videoPlay2';
import Header from './CommonComponents/HomeCommon/HomeHeader/page';


function Home() {

  return (
    <div>
      <Header/> 
      <CitiesSlider />
      <Whyus image='/whyus/whyus2.webp'/>
      <Popularproperties />
      <VideoPLay2 />
      <FeatureProperty type="mainpage" />
      <LogoSection />
      <Reviews/>
      <GetListed />
    </div>
  );
};

export default Home

