import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyB1cHuxwmTTJJSancPn_6OsREixa87JmU8",
      authDomain: "catch-of-the-day-rae.firebaseapp.com",
      databaseURL: "https://catch-of-the-day-rae.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;