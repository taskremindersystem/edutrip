import React, { useState, useEffect } from 'react';
import './InfiniteCarousel.css';

/**
 * Infinite Carousel Component - Netflix-style
 * Follows Single Responsibility Principle - handles infinite scrolling carousel
 */
const InfiniteCarousel = ({ items, renderCard, speed = 30, pauseOnHover = true }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Double the items for seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="infinite-carousel-wrapper">
      <div 
        className={`infinite-carousel ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        style={{
          '--scroll-speed': `${speed}s`,
          '--items-count': items.length
        }}
      >
        <div className="carousel-track">
          {duplicatedItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="carousel-item">
              {renderCard(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;

