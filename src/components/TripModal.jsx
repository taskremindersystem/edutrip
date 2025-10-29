import React, { useEffect } from 'react';
import './TripModal.css';

const TripModal = ({ trip, onClose, onBook }) => {
  if (!trip) return null;

  // Close on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  const handleBookTrip = () => {
    if (onBook) {
      onBook(trip);
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="trip-modal-content">
          <div className="trip-modal-header">
            <span className="trip-category">
              {trip.category.charAt(0).toUpperCase() + trip.category.slice(1)}
            </span>
            <h2>{trip.title}</h2>
            <p className="trip-location">
              <i className="fas fa-map-marker-alt"></i> {trip.city}, {trip.state}
            </p>
            <div className="trip-modal-details">
              <span className="trip-duration">{trip.duration}</span>
              <span className="trip-price">{trip.price}</span>
            </div>
          </div>
          
          <div className="trip-modal-body">
            <div className="trip-info">
              <h3>Description</h3>
              <p>{trip.description}</p>
              
              <h3>Trip Details</h3>
              <div className="trip-details-grid">
                <div className="detail-item">
                  <strong>Capacity:</strong> {trip.capacity}
                </div>
                <div className="detail-item">
                  <strong>Age Group:</strong> {trip.ageGroup}
                </div>
                <div className="detail-item">
                  <strong>Duration:</strong> {trip.duration}
                </div>
                <div className="detail-item">
                  <strong>Price:</strong> {trip.price}
                </div>
              </div>
              
              <h3>What's Included</h3>
              <ul className="includes-list">
                {trip.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3>Itinerary</h3>
              <div className="itinerary">
                {trip.itinerary.map((item, index) => (
                  <div key={index} className="itinerary-item">{item}</div>
                ))}
              </div>
              
              <h3>Features</h3>
              <div className="trip-features">
                {trip.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="trip-modal-footer">
            <button className="btn btn-primary" onClick={handleBookTrip}>
              Book This Trip
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripModal;
