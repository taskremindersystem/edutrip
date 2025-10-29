import React from 'react';
import HomePage from '../pages/HomePage.jsx';
import TripsPage from '../pages/TripsPage.jsx';
import DestinationsPage from '../pages/DestinationsPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';

/**
 * Page Router Component
 * Follows Open/Closed Principle - open for extension, closed for modification
 */
const PageRouter = ({ activeSection }) => {
  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'trips':
        return <TripsPage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return <main>{renderPage()}</main>;
};

export default PageRouter;
