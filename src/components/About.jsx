import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">About EduTrip</h2>
        <div className="about-content">
          <div className="about-text">
            <p>EduTrip is India's premier educational travel platform, designed to help schools and colleges explore the incredible diversity of our nation. From the snow-capped Himalayas to the backwaters of Kerala, from ancient temples to modern tech hubs, we help you discover India's rich heritage, culture, and natural beauty through educational experiences.</p>
            <div className="features">
              <div className="feature">
                <i className="fas fa-calendar-alt"></i>
                <h3>Easy Planning</h3>
                <p>Plan your trips with our intuitive interface</p>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <h3>Group Management</h3>
                <p>Manage students and chaperones efficiently</p>
              </div>
              <div className="feature">
                <i className="fas fa-map"></i>
                <h3>Destination Info</h3>
                <p>Access detailed information about destinations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
