// Contains functions for CRUD operations on the Firebase database
import firebase from 'firebase/app';
import { encrypt } from './securityTools';
import { decryptPasswords } from './securityTools';

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

  await passRecordRef.set(encryptedPassword);
}

async function getPasswords(userID) {
  const passwordsRef = firebase.database().ref(`/users/${userID}/passwords`);

  return await passwordsRef
    .once('value')
    .then(data => data.val())
    .then(res => decryptPasswords(res));
}

function getFirebasePasswordReference(userID, passwordID) {
  return firebase.database().ref(`/users/${userID}/passwords/${passwordID}`);
}

export { createNewPassword, getPasswords };
