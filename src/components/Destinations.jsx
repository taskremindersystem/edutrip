import React from 'react';
import DestinationCard from './DestinationCard.jsx';
import './Destinations.css';

const Destinations = ({ destinations }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Famous Indian Destinations</h2>
        <div className="destinations-grid">
          {destinations.map(destination => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
