import React from 'react';
import Destinations from '../components/Destinations.jsx';
import { useTrips } from '../hooks/useTrips.jsx';

/**
 * Destinations Page Component
 * Follows Single Responsibility Principle - only handles destinations page display
 */
const DestinationsPage = () => {
  const { destinations } = useTrips();

  return <Destinations destinations={destinations} />;
};

export default DestinationsPage;
