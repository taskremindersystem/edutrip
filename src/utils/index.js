// Utility Functions

/**
 * Filter trips by category
 * @param {Array} trips - Array of trip objects
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered trips
 */
export const filterTripsByCategory = (trips, category) => {
  if (category === 'all') return trips;
  return trips.filter(trip => trip.category === category);
};

/**
 * Find trip by ID
 * @param {Array} trips - Array of trip objects
 * @param {number} id - Trip ID
 * @returns {Object|null} Trip object or null
 */
export const findTripById = (trips, id) => {
  return trips.find(trip => trip.id === id) || null;
};

/**
 * Format price for display
 * @param {string} price - Price string
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return price || 'Price not available';
};

/**
 * Format location string
 * @param {string} city - City name
 * @param {string} state - State name
 * @returns {string} Formatted location
 */
export const formatLocation = (city, state) => {
  return `${city}, ${state}`;
};

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalizeFirstLetter = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Debounce function for search/filter
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
