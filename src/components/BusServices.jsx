import React, { useState } from 'react';
import InfiniteCarousel from './InfiniteCarousel.jsx';
import busServicesData from '../data/busServices.json';
import './BusServices.css';

/**
 * Bus Services Component
 * Displays available bus services in an infinite carousel
 */
const BusServices = () => {
  return (
    <section className="bus-services-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">🚌</span>
          Our Bus Services
        </h2>
        <p className="section-subtitle">
          Comfortable and safe transportation for your educational journey
        </p>
      </div>

      <InfiniteCarousel 
        items={busServicesData}
        renderCard={(bus) => <BusCard bus={bus} />}
        speed={40}
        pauseOnHover={true}
      />
    </section>
  );
};

/**
 * Individual Bus Card Component
 */
const BusCard = ({ bus }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bus-card">
      <div className="bus-card-image">
        {!imageError && bus.imageUrl ? (
          <img 
            src={bus.imageUrl} 
            alt={bus.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="bus-card-fallback">
            <span className="bus-icon">{bus.image}</span>
          </div>
        )}
        <div className="bus-card-overlay">
          <span className="bus-price">₹{bus.pricePerKm}/km</span>
        </div>
      </div>
      
      <div className="bus-card-content">
        <h3 className="bus-name">{bus.name}</h3>
        <p className="bus-capacity">
          <i className="fas fa-users"></i> {bus.capacity}
        </p>
        <p className="bus-description">{bus.description}</p>
        
        <div className="bus-amenities">
          {bus.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="amenity-tag">
              {amenity}
            </span>
          ))}
          {bus.amenities.length > 3 && (
            <span className="amenity-tag more">+{bus.amenities.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusServices;

