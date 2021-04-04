import React, { useState } from 'react';

//import HeroSection from '../component/Herosection';
import MainPage from '../component/MainPage';
import NavBar from '../component/NavBar';
import Sidebar from '../component/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <MainPage />
    </>
  );
};

export default Home;
