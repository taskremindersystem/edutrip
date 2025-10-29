import React from 'react';
import TripCard from './TripCard.jsx';
import { TRIP_CATEGORIES, FILTER_LABELS } from '../constants/index.js';
import './Trips.css';

/**
 * Trips Component
 * Follows Single Responsibility Principle - only handles trips display
 * Follows Open/Closed Principle - open for extension via constants
 */
const Trips = ({ trips, currentFilter, onFilterChange, onTripClick }) => {
  const filters = Object.values(TRIP_CATEGORIES).map(category => ({
    key: category,
    label: FILTER_LABELS[category]
  }));

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Educational Trips Across India</h2>
        <div className="trip-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
              onClick={() => onFilterChange(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="trips-grid">
          {trips.map(trip => (
            <TripCard
              key={trip.id}
              trip={trip}
              onClick={() => onTripClick(trip.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trips;
