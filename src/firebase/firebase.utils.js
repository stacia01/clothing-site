import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCVsa0T1ntTaGgvHxvCjE7oVq8p_gk5vLU",
  authDomain: "clothing-site-9d01b.firebaseapp.com",
  projectId: "clothing-site-9d01b",
  storageBucket: "clothing-site-9d01b.appspot.com",
  messagingSenderId: "86248955681",
  appId: "1:86248955681:web:3f75af27d96a6f1870a860",
  measurementId: "G-1J6TWBX4B0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;