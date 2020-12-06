import firebase from 'firebase/app';
import { decrypt } from './securityTools';
import { firebasesecret } from '../config';
import 'firebase/auth';

export function firebaseInit() {
  firebase.initializeApp(decrypt(firebasesecret));
}

export function signUpUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
}

export function signInUser(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
}

export function signOutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('sign out success');
    })
    .catch(error => {
      console.log(error.code, error.message);
    });
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}

// export function getCurrentUser() {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       console.log(user);
//     } else {
//       console.log('None signed in');
//     }
//   });
// }
