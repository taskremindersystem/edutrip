// Application Constants
export const APP_CONFIG = {
  NAME: 'EduTrip',
  VERSION: '1.0.0',
  DESCRIPTION: 'Educational Travel Planner for India'
};

// Trip Categories
export const TRIP_CATEGORIES = {
  ALL: 'all',
  SCIENCE: 'science',
  HISTORY: 'history',
  CULTURE: 'culture',
  NATURE: 'nature',
  ADVENTURE: 'adventure',
  BEACH: 'beach',
  WILDLIFE: 'wildlife'
};

// Filter Labels
export const FILTER_LABELS = {
  [TRIP_CATEGORIES.ALL]: 'All Trips',
  [TRIP_CATEGORIES.SCIENCE]: 'Science & Tech',
  [TRIP_CATEGORIES.HISTORY]: 'Historical Sites',
  [TRIP_CATEGORIES.CULTURE]: 'Cultural Heritage',
  [TRIP_CATEGORIES.NATURE]: 'Nature & Adventure',
  [TRIP_CATEGORIES.ADVENTURE]: 'Adventure Activities',
  [TRIP_CATEGORIES.BEACH]: 'Beach & Coastal',
  [TRIP_CATEGORIES.WILDLIFE]: 'Wildlife & Safari'
};

// Navigation Items
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'trips', label: 'Trips', path: '#trips' },
  { id: 'destinations', label: 'Destinations', path: '#destinations' },
  { id: 'about', label: 'About', path: '#about' }
];

// Contact Information
export const CONTACT_INFO = {
  EMAIL: 'info@edutrip.com',
  PHONE: '+91 (555) 123-4567'
};
