import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <div className="destination-image">
        {destination.imageUrl ? (
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="destination-image-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="destination-image-fallback" style={{ display: destination.imageUrl ? 'none' : 'flex' }}>
          <i className={destination.image}></i>
        </div>
      </div>
      <div className="destination-content">
        <h3 className="destination-name">{destination.name}</h3>
        <p className="destination-location">
          <i className="fas fa-map-marker-alt"></i> {destination.city}, {destination.state}
        </p>
        <p className="destination-description">{destination.description}</p>
        <div className="destination-rating">
          <i className="fas fa-star"></i>
          <span>{destination.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
