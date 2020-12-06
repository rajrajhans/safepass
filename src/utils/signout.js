import firebase from 'firebase/app';
import 'firebase/auth';

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
