import { openDB } from 'idb';

const initializeDB = async () => {
  const db = await openDB('FlightBookingsDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('bookings')) {
        const store = db.createObjectStore('bookings', { keyPath: 'id' });
        store.createIndex('userId', 'userId'); // Create an index for user-specific queries
      }
    },
  });
  return db;
};


export const saveBooking = async (booking) => {
  const db = await initializeDB();
  const tx = db.transaction('bookings','readwrite')
  await tx.objectStore('bookings').put(booking)
  await tx.done;
  console.log('booking saved to indexdb',booking)
};

export const getBookingsByUserId = async (userId) => {
  const db = await initializeDB();
  const tx = db.transaction('bookings', 'readonly');
  const index = tx.objectStore('bookings').index('userId');
  const bookings = await index.getAll(userId);
  console.log(bookings)
  return bookings;
};

export const getAllBookings = async () => {
  const db = await initializeDB();
  const tx = db.transaction('bookings', 'readonly');
  const bookings = await tx.objectStore('bookings').getAll();
  return bookings;
};
export const deleteBooking = async (bookingId) => {
  const db = await initializeDB();
  const tx = db.transaction('bookings', 'readwrite');
  await tx.objectStore('bookings').delete(bookingId);
  await tx.done;
  console.log(`Booking with ID ${bookingId} deleted successfully.`);
};
