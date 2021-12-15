import firebase from 'firebase/compat';
const firebaseConfig = {
    apiKey: "AIzaSyDLNKcalVxT2Nhmo4HA9ZW3pz1TC7loJok",
    authDomain: "eats-mobile.firebaseapp.com",
    projectId: "eats-mobile",
    storageBucket: "eats-mobile.appspot.com",
    messagingSenderId: "869875162936",
    appId: "1:869875162936:web:163fa1260764257454abcd"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;