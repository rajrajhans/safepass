import firebase from 'firebase/app';
require('firebase/auth');

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