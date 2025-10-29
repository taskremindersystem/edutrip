import React from 'react';
import { NAV_ITEMS, APP_CONFIG, CONTACT_INFO } from '../constants/index.js';
import './Footer.css';

/**
 * Footer Component
 * Follows Single Responsibility Principle - only handles footer display
 * Follows Open/Closed Principle - open for extension via constants
 */
const Footer = ({ onShowSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{APP_CONFIG.NAME}</h3>
            <p>Making educational travel accessible and organized across India.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.id}>
                  <a 
                    href={item.path} 
                    onClick={(e) => { e.preventDefault(); onShowSection(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p><i className="fas fa-envelope"></i> {CONTACT_INFO.EMAIL}</p>
            <p><i className="fas fa-phone"></i> {CONTACT_INFO.PHONE}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 {APP_CONFIG.NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
