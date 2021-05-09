import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCMHW_eAbvlNCVImuMzZRnKHrCQ-0Nkb0A",
  authDomain: "clonetinker.firebaseapp.com",
  projectId: "clonetinker",
  storageBucket: "clonetinker.appspot.com",
  messagingSenderId: "440658317040",
  appId: "1:440658317040:web:2c61ff5c627bfeb2023c35",
  measurementId: "G-PMG1YCDYRG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;