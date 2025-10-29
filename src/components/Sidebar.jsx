import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { TRIP_CATEGORIES, FILTER_LABELS } from '../constants/index.js';
import { emit } from '../utils/eventBus.jsx';
import { useClickOutside } from '../hooks/useClickOutside.jsx';

/**
 * Collapsible left sidebar inspired by Miro.
 * Shows primary navigation and key trip filters.
 */
const Sidebar = ({ activeSection, onNavigate, onCollapsedChange }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Close sidebar when clicking outside (only on mobile/tablet)
  const sidebarRef = useClickOutside(() => {
    if (window.innerWidth <= 992 && !collapsed) {
      setCollapsed(true);
      if (onCollapsedChange) onCollapsedChange(true);
    }
  });

  const handleNavigate = (section) => {
    if (onNavigate) onNavigate(section);
    // Auto-collapse on mobile after navigation for better visibility
    if (window.innerWidth <= 992) {
      setCollapsed(true);
      if (onCollapsedChange) onCollapsedChange(true);
    }
  };

  const handleTripFilter = (filterKey) => {
    if (onNavigate) onNavigate('trips');
    emit('changeTripFilter', { filter: filterKey });
    // Auto-collapse on mobile after filter selection
    if (window.innerWidth <= 992) {
      setCollapsed(true);
      if (onCollapsedChange) onCollapsedChange(true);
    }
  };

  const toggleCollapse = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onCollapsedChange) onCollapsedChange(newCollapsedState);
  };

  // Close on ESC key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && !collapsed) {
        setCollapsed(true);
        if (onCollapsedChange) onCollapsedChange(true);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [collapsed, onCollapsedChange]);

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`sidebar-overlay ${!collapsed ? 'active' : ''}`}
        onClick={() => {
          setCollapsed(true);
          if (onCollapsedChange) onCollapsedChange(true);
        }}
      />
      
      <aside ref={sidebarRef} className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-inner">
          <button 
            className="collapse-btn" 
            onClick={toggleCollapse} 
            aria-label="Toggle sidebar"
          >
            <span className="collapse-icon">{collapsed ? '›' : '‹'}</span>
          </button>

        <nav className="side-nav">
          <div className={`nav-group ${activeSection === 'home' ? 'active' : ''}`}>
            <button 
              className="nav-item" 
              onClick={() => handleNavigate('home')}
            >
              <i className="fas fa-home"></i>
              {!collapsed && <span className="label">Home</span>}
            </button>
          </div>

          <div className={`nav-group ${activeSection === 'trips' ? 'active' : ''}`}>
            <button 
              className="nav-item" 
              onClick={() => handleNavigate('trips')}
            >
              <i className="fas fa-route"></i>
              {!collapsed && <span className="label">Trips</span>}
            </button>
            {!collapsed && (
              <div className="nav-sublist">
                {Object.values(TRIP_CATEGORIES).map((key) => (
                  <button
                    key={key}
                    className="nav-subitem"
                    onClick={() => handleTripFilter(key)}
                  >
                    <span className="dot"></span>
                    <span className="sub-label">{FILTER_LABELS[key]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={`nav-group ${activeSection === 'destinations' ? 'active' : ''}`}>
            <button 
              className="nav-item" 
              onClick={() => handleNavigate('destinations')}
            >
              <i className="fas fa-map-marked-alt"></i>
              {!collapsed && <span className="label">Destinations</span>}
            </button>
          </div>

          <div className={`nav-group ${activeSection === 'about' ? 'active' : ''}`}>
            <button 
              className="nav-item" 
              onClick={() => handleNavigate('about')}
            >
              <i className="fas fa-info-circle"></i>
              {!collapsed && <span className="label">About</span>}
            </button>
          </div>
        </nav>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
