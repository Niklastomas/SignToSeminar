import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAVhRAdemlMiPc-G24yh1byNjtTPrMvqZY',
  authDomain: 'signtoseminar-e4423.firebaseapp.com',
  databaseURL: 'https://signtoseminar-e4423.firebaseio.com',
  projectId: 'signtoseminar-e4423',
  storageBucket: 'signtoseminar-e4423.appspot.com',
  messagingSenderId: '159825768094',
  appId: '1:159825768094:web:dbc8f8cc5176f40cffd58f',
  measurementId: 'G-MFXL34FW5W',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
