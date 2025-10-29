import React from 'react';
import Hero from '../components/Hero.jsx';
import BusServices from '../components/BusServices.jsx';
import OtherServices from '../components/OtherServices.jsx';
import { useNavigation } from '../hooks/useNavigation.jsx';

/**
 * Home Page Component
 * Follows Single Responsibility Principle - only handles home page display
 */
const HomePage = () => {
  const { navigateTo } = useNavigation();

  return (
    <>
      <Hero onShowSection={navigateTo} />
      <BusServices />
      <OtherServices />
    </>
  );
};

export default HomePage;
