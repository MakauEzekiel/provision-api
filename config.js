const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAX0m113NEb6yMxhdk1HeqsQXe-EGSdfDE",
  authDomain: "provision-16.firebaseapp.com",
  projectId: "provision-16",
  storageBucket: "provision-16.appspot.com",
  messagingSenderId: "509494410547",
  appId: "1:509494410547:web:f05cfa992d7e3da3b09246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const firestore = getFirestore(app);
const User = collection(firestore, 'Users');
const productsCollection = collection(firestore, 'products');

module.exports = {firestore: firestore, productsCollection: productsCollection, user: User ,collection: collection, addDoc: addDoc, getDocs: getDocs};