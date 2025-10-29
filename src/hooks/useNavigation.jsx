import { useState } from 'react';

/**
 * Custom hook for managing navigation state
 */
export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  return {
    activeSection,
    navigateTo
  };
};
