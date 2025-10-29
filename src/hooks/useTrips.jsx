import { useState, useEffect } from 'react';
import tripsData from '../data/trips.json';
import destinationsData from '../data/destinations.json';
import { filterTripsByCategory } from '../utils/index.js';

/**
 * Custom hook for managing trips data and filtering
 */
export const useTrips = () => {
  const [trips, setTrips] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setTrips(tripsData);
      setDestinations(destinationsData);
      setLoading(false);
    } catch (err) {
      setError('Failed to load data');
      setLoading(false);
    }
  }, []);

  const filteredTrips = filterTripsByCategory(trips, currentFilter);

  const changeFilter = (filter) => {
    setCurrentFilter(filter);
  };

  return {
    trips,
    destinations,
    filteredTrips,
    currentFilter,
    loading,
    error,
    changeFilter
  };
};
