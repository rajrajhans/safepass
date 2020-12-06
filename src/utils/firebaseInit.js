import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../config';

let app;

if (!firebase.apps.length) app = firebase.initializeApp(firebaseConfig);
else app = firebase.app();

export default app;
