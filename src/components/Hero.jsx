import React, { useState } from 'react';
import './Hero.css';
import { emit } from '../utils/eventBus.jsx';
import { TRIP_CATEGORIES, FILTER_LABELS } from '../constants/index.js';

const Hero = ({ onShowSection }) => {
  const [showTripsDropdown, setShowTripsDropdown] = useState(false);
  const [showDestinationsDropdown, setShowDestinationsDropdown] = useState(false);

  const handleCategoryClick = (category) => {
    setShowTripsDropdown(false);
    onShowSection('trips');
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      emit('changeTripFilter', { filter: category });
    }, 100);
  };

  const handleViewAllTrips = () => {
    setShowTripsDropdown(false);
    onShowSection('trips');
  };

  const handleViewAllDestinations = () => {
    setShowDestinationsDropdown(false);
    onShowSection('destinations');
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <span className="hero-badge">✈️ Educational Tours Across India</span>
          <h1 className="hero-title">
            Discover <span className="gradient-text">Incredible India</span>
          </h1>
          <p className="hero-description">
            Plan unforgettable educational trips across India's diverse landscapes - from Rajasthan's 
            majestic palaces to Kerala's serene backwaters, Uttarakhand's snow-capped mountains to 
            Karnataka's tech hubs. Experience India's rich heritage, vibrant culture, and breathtaking 
            natural beauty with our comprehensive travel solutions.
          </p>
          <div className="hero-buttons">
            {/* Explore Trips Button with Dropdown */}
            <div className="hero-btn-wrapper">
              <button 
                className="btn btn-primary" 
                onClick={() => setShowTripsDropdown(!showTripsDropdown)}
                onMouseEnter={() => setShowTripsDropdown(true)}
              >
                <span>Explore Trips</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              
              {showTripsDropdown && (
                <div 
                  className="hero-dropdown"
                  onMouseLeave={() => setShowTripsDropdown(false)}
                >
                  <button 
                    className="dropdown-item featured"
                    onClick={handleViewAllTrips}
                  >
                    <i className="fas fa-th-large"></i>
                    <div>
                      <span className="item-title">View All Trips</span>
                      <span className="item-desc">Browse our complete collection</span>
                    </div>
                  </button>
                  <div className="dropdown-divider"></div>
                  {Object.values(TRIP_CATEGORIES).map((category) => (
                    <button
                      key={category}
                      className="dropdown-item"
                      onClick={() => handleCategoryClick(category)}
                    >
                      <i className={`fas fa-${getCategoryIcon(category)}`}></i>
                      <span>{FILTER_LABELS[category]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* View Destinations Button with Dropdown */}
            <div className="hero-btn-wrapper">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowDestinationsDropdown(!showDestinationsDropdown)}
                onMouseEnter={() => setShowDestinationsDropdown(true)}
              >
                <span>View Destinations</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              
              {showDestinationsDropdown && (
                <div 
                  className="hero-dropdown"
                  onMouseLeave={() => setShowDestinationsDropdown(false)}
                >
                  <button 
                    className="dropdown-item featured"
                    onClick={handleViewAllDestinations}
                  >
                    <i className="fas fa-map-marked-alt"></i>
                    <div>
                      <span className="item-title">View All Destinations</span>
                      <span className="item-desc">Explore 500+ amazing places</span>
                    </div>
                  </button>
                  <div className="dropdown-divider"></div>
                  <button
                    className="dropdown-item"
                    onClick={() => { setShowDestinationsDropdown(false); onShowSection('destinations'); }}
                  >
                    <i className="fas fa-mountain"></i>
                    <span>Hill Stations</span>
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => { setShowDestinationsDropdown(false); onShowSection('destinations'); }}
                  >
                    <i className="fas fa-umbrella-beach"></i>
                    <span>Beaches</span>
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => { setShowDestinationsDropdown(false); onShowSection('destinations'); }}
                  >
                    <i className="fas fa-landmark"></i>
                    <span>Historical Places</span>
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => { setShowDestinationsDropdown(false); onShowSection('destinations'); }}
                  >
                    <i className="fas fa-city"></i>
                    <span>Metropolitan Cities</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item clickable" onClick={() => onShowSection('destinations')}>
              <span className="stat-number">28+</span>
              <span className="stat-label">States Covered</span>
            </div>
            <div className="stat-item clickable" onClick={() => onShowSection('destinations')}>
              <span className="stat-number">500+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-item clickable" onClick={() => onShowSection('about')}>
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Students</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <button 
            className="floating-card card-1" 
            onClick={() => handleCategoryClick('nature')}
            aria-label="View Mountain Tours"
          >
            <i className="fas fa-mountain"></i>
            <span>Mountain Tours</span>
          </button>
          <button 
            className="floating-card card-2" 
            onClick={() => handleCategoryClick('history')}
            aria-label="View Historical Sites"
          >
            <i className="fas fa-landmark"></i>
            <span>Historical Sites</span>
          </button>
          <button 
            className="floating-card card-3" 
            onClick={() => handleCategoryClick('beach')}
            aria-label="View Beach Trips"
          >
            <i className="fas fa-umbrella-beach"></i>
            <span>Beach Trips</span>
          </button>
          <div className="hero-main-icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get icon for each category
const getCategoryIcon = (category) => {
  const icons = {
    all: 'th-large',
    nature: 'tree',
    history: 'landmark',
    adventure: 'hiking',
    beach: 'umbrella-beach',
    culture: 'theater-masks',
    wildlife: 'paw',
    science: 'flask'
  };
  return icons[category] || 'map-marker-alt';
};

export default Hero;
