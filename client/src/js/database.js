import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// The function for updating the database.
export const putDb = async (content) => {
  console.log('Update to database');
  // Creates the connection to the database ('jate') and gets the version desired.
  const jateDb = await openDB('jate', 1);
  // Creates the changes to the database ('jate') and declares the permissions to the file. It then accesses the stored object of 'jate' and updates the key with the new changes (stored in content). 
  const result = await jateDb.transaction('jate', 'readwrite').objectStore('jate').put({ id: 1, value: content});
  console.log('Data saved to the database', result);}


// TODO: Add logic for a method that gets all the content from the database
//The function for getting data from the database.
export const getDb = async () => {
  console.log('Get from the database');
  // Creates the connection to the database ('jate') and accesses value '1'
  const jateDb = await openDB('jate', 1);
  // Grabs the data from the database ('jate') and declares the permissions to the file. It then accesses the stored object of 'jate' and gets the version desired.
  const result = await jateDb.transaction('jate', 'readwrite').objectStore('jate').get(1);
  console.log('result.value', result);
  // Returns the value data of the result.
  return result?.value;
}

initdb();
