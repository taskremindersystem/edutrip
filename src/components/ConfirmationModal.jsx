import React, { useEffect } from 'react';
import './ConfirmationModal.css';

/**
 * Professional Confirmation Modal Component
 * Displays booking confirmation with contact information
 */
const ConfirmationModal = ({ trip, onClose }) => {
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

  return (
    <div className="confirmation-modal-overlay" onClick={onClose}>
      <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
        {/* Left Side - Icon and Title */}
        <div className="confirmation-left">
          <div className="confirmation-icon">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
          </div>

          <h2 className="confirmation-title">Booking Request Received!</h2>
          
          <p className="confirmation-message">
            Thank you for your interest in <strong>"{trip.title}"</strong>
          </p>
        </div>

        {/* Right Side - Details and Contact */}
        <div className="confirmation-right">
          <div className="confirmation-details">
            <div className="detail-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <span className="detail-label">Destination</span>
                <span className="detail-value">{trip.city}, {trip.state}</span>
              </div>
            </div>

            <div className="detail-card">
              <i className="fas fa-calendar-alt"></i>
              <div>
                <span className="detail-label">Duration</span>
                <span className="detail-value">{trip.duration}</span>
              </div>
            </div>

            <div className="detail-card">
              <i className="fas fa-rupee-sign"></i>
              <div>
                <span className="detail-label">Price</span>
                <span className="detail-value">{trip.price}</span>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h3>Complete Your Booking</h3>
            <p>Our team will contact you shortly. You can also reach us at:</p>
            
            <div className="contact-methods">
              <a href="mailto:info@edutrip.com" className="contact-button email">
                <i className="fas fa-envelope"></i>
                <span>info@edutrip.com</span>
              </a>
              <a href="tel:+915551234567" className="contact-button phone">
                <i className="fas fa-phone-alt"></i>
                <span>+91 (555) 123-4567</span>
              </a>
            </div>
          </div>

          <button className="confirmation-close-btn" onClick={onClose}>
            Got it, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

