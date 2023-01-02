import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzMthoGs8pW6-M0fVKefiZ6NcNj9UnnGM",
  authDomain: "resturantapp-97f71.firebaseapp.com",
  databaseURL: "https://resturantapp-97f71-default-rtdb.firebaseio.com",
  projectId: "resturantapp-97f71",
  storageBucket: "resturantapp-97f71.appspot.com",
  messagingSenderId: "839289121557",
  appId: "1:839289121557:web:2d4c41b9f989cf4899171c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
