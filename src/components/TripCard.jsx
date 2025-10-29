import React from 'react';
import { capitalizeFirstLetter, formatLocation, formatPrice } from '../utils/index.js';
import './TripCard.css';

/**
 * TripCard Component
 * Follows Single Responsibility Principle - only handles trip card display
 * Follows Dependency Inversion Principle - depends on utility abstractions
 */
const TripCard = ({ trip, onClick }) => {
  return (
    <div className="trip-card" onClick={onClick}>
      <div className="trip-image">
        {trip.imageUrl ? (
          <img 
            src={trip.imageUrl} 
            alt={trip.title}
            className="trip-image-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="trip-image-fallback" style={{ display: trip.imageUrl ? 'none' : 'flex' }}>
          <i className={trip.image}></i>
        </div>
      </div>
      <div className="trip-content">
        <span className="trip-category">
          {capitalizeFirstLetter(trip.category)}
        </span>
        <h3 className="trip-title">{trip.title}</h3>
        <p className="trip-location">
          <i className="fas fa-map-marker-alt"></i> {formatLocation(trip.city, trip.state)}
        </p>
        <p className="trip-description">{trip.description}</p>
        <div className="trip-details">
          <span className="trip-duration">{trip.duration}</span>
          <span className="trip-price">{formatPrice(trip.price)}</span>
        </div>
        <div className="trip-features">
          {trip.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
