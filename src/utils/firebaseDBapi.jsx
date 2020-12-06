// Contains functions for CRUD operations on the Firebase database
import firebase from 'firebase/app';
import { encrypt } from './securityTools';

async function createNewPassword(userID, passwordInfo) {
  const passwordID = firebase.database().ref().child('passwords').push().key;
  const passRecordRef = getFirebasePasswordReference(userID, passwordID);

  const password = {
    category: passwordInfo.category,
    title: passwordInfo.title,
    username: passwordInfo.username,
    password: passwordInfo.password,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const encryptedPassword = encrypt(password);

  console.log('making req');

  await passRecordRef.set(encryptedPassword);

  console.log('Done');
}

function getFirebasePasswordReference(userID, passwordID) {
  return firebase.database().ref(`/users/${userID}/passwords/${passwordID}`);
}

export { createNewPassword };
