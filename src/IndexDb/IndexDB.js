import { openDB } from 'idb';

const dbPromise = openDB('auth-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('users')) {
      db.createObjectStore('users', { keyPath: 'email' }); // Use email as the primary key
    }
  },
});

export const addUser = async (user) => {
  const db = await dbPromise;
  await db.put('users', user);
};

export const getUserByEmail = async (email) => {
  const db = await dbPromise;
  return await db.get('users', email);
};
