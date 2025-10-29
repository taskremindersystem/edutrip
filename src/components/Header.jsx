import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, APP_CONFIG, TRIP_CATEGORIES, FILTER_LABELS } from '../constants/index.js';
import { emit } from '../utils/eventBus.jsx';
import { useClickOutside } from '../hooks/useClickOutside.jsx';
import './Header.css';

/**
 * Enhanced Header Component with full navigation and dropdowns
 * Follows Miro-style top navigation with integrated menu structure
 */
const Header = ({ activeSection, onShowSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTripsDropdownOpen, setIsTripsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  const dropdownRef = useClickOutside(() => {
    setIsTripsDropdownOpen(false);
  });

  // Close mobile menu when clicking outside
  const mobileMenuRef = useClickOutside(() => {
    setIsMobileMenuOpen(false);
  });

  // Close on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsTripsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    onShowSection(section);
    setIsMobileMenuOpen(false);
    setIsTripsDropdownOpen(false);
  };

  const handleTripFilter = (filterKey) => {
    onShowSection('trips');
    setIsTripsDropdownOpen(false);
    emit('changeTripFilter', { filter: filterKey });
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Left side - Brand */}
        <div className="nav-brand">
          <i className="fas fa-graduation-cap"></i>
          <h1>{APP_CONFIG.NAME}</h1>
        </div>

        {/* Right side - Navigation Menu */}
        <div ref={mobileMenuRef} className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => {
            if (item.id === 'trips') {
              return (
                <div key={item.id} className="nav-item-group" ref={dropdownRef}>
                  <button
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setIsTripsDropdownOpen(!isTripsDropdownOpen)}
                  >
                    {item.label}
                    <i className="fas fa-chevron-down dropdown-icon"></i>
                  </button>
                  {isTripsDropdownOpen && (
                    <div className="dropdown-menu">
                      {Object.values(TRIP_CATEGORIES).map((key) => (
                        <button
                          key={key}
                          className="dropdown-item"
                          onClick={() => handleTripFilter(key)}
                        >
                          <span className="filter-label">{FILTER_LABELS[key]}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.id}
                href={item.path}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <div
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
