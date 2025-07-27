import React from 'react';

import AddFlights from './AddFlights';
import BookingDetail from './BookingDetail';

function AdminTable({ activeComponent }) {
  console.log('COMPONENT RENDER');
  return (
    <>
      {activeComponent === 'booking' && <BookingDetail />}

      {activeComponent === 'addFlight' && <AddFlights />}
    </>
  );
}

export default AdminTable;
