import React, { useState } from 'react';
import InfiniteCarousel from './InfiniteCarousel.jsx';
import otherServicesData from '../data/otherServices.json';
import './OtherServices.css';

/**
 * Other Services Component
 * Displays additional services in an infinite carousel
 */
const OtherServices = () => {
  return (
    <section className="other-services-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-icon">✨</span>
          Additional Services
        </h2>
        <p className="section-subtitle">
          Everything you need for a complete educational trip experience
        </p>
      </div>

      <InfiniteCarousel 
        items={otherServicesData}
        renderCard={(service) => <ServiceCard service={service} />}
        speed={35}
        pauseOnHover={true}
      />
    </section>
  );
};

/**
 * Individual Service Card Component
 */
const ServiceCard = ({ service }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="service-card">
      <div className="service-card-image">
        {!imageError && service.imageUrl ? (
          <img 
            src={service.imageUrl} 
            alt={service.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="service-card-fallback">
            <span className="service-icon">{service.icon}</span>
          </div>
        )}
        <div className="service-card-gradient"></div>
      </div>
      
      <div className="service-card-content">
        <div className="service-header">
          <span className="service-emoji">{service.icon}</span>
          <h3 className="service-name">{service.name}</h3>
        </div>
        
        <p className="service-description">{service.description}</p>
        
        <div className="service-features">
          {service.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="service-btn">
          <span>Learn More</span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default OtherServices;

