import React, { useEffect, useState, useContext } from 'react';
import Trips from '../components/Trips.jsx';
import TripModal from '../components/TripModal.jsx';
import ConfirmationModal from '../components/ConfirmationModal.jsx';
import { useTrips } from '../hooks/useTrips.jsx';
import { useModal } from '../hooks/useModal.jsx';
import { on } from '../utils/eventBus.jsx';
import { ToastContext } from '../App.jsx';

/**
 * Trips Page Component
 * Follows Single Responsibility Principle - only handles trips page display
 */
const TripsPage = () => {
  const { filteredTrips, currentFilter, changeFilter } = useTrips();
  const { isOpen, selectedItem, openModal, closeModal } = useModal();
  const [confirmationTrip, setConfirmationTrip] = useState(null);
  const toast = useContext(ToastContext);

  const handleTripClick = (tripId) => {
    const trip = filteredTrips.find(t => t.id === tripId);
    if (trip) {
      openModal(trip);
    }
  };

  const handleBookTrip = (trip) => {
    closeModal();
    setConfirmationTrip(trip);
    // Show a toast notification as well
    toast.showSuccess('Booking request received! Check your details.', 5000);
  };

  useEffect(() => {
    // Listen for sidebar filter selection
    const off = on('changeTripFilter', ({ filter }) => {
      changeFilter(filter);
    });
    return off;
  }, [changeFilter]);

  return (
    <>
      <Trips 
        trips={filteredTrips} 
        currentFilter={currentFilter}
        onFilterChange={changeFilter}
        onTripClick={handleTripClick}
      />
      {isOpen && selectedItem && (
        <TripModal 
          trip={selectedItem} 
          onClose={closeModal}
          onBook={handleBookTrip}
        />
      )}
      {confirmationTrip && (
        <ConfirmationModal 
          trip={confirmationTrip}
          onClose={() => setConfirmationTrip(null)}
        />
      )}
    </>
  );
};

export default TripsPage;
