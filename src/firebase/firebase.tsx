import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAMZ9_qQ71LfxDUklL3x3M6hTgQtFPeKFo",
  authDomain: "skill-tree-retry2.firebaseapp.com",
  databaseURL: "https://skill-tree-retry2-default-rtdb.firebaseio.com",
  projectId: "skill-tree-retry2",
  storageBucket: "skill-tree-retry2.appspot.com",
  messagingSenderId: "51122224529",
  appId: "1:51122224529:web:c66d2151c200a1f1346e30",
  measurementId: "G-WK8N82XCF5"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
export const FieldValue = firebase.firestore.FieldValue;

myFirebase.analytics();
const baseDb = myFirebase.firestore();
export const db = baseDb;
const fbStorage = myFirebase.storage();
export const storage = fbStorage;
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const microsoftProvider = new firebase.auth.OAuthProvider(
  "microsoft.com"
);
export const googleFontAPIKey = "AIzaSyBs6pmfAEwvd3SmY9hJoGNoASoa-JXP-B0";
export const youtubeAPIKey = "AIzaSyBs6pmfAEwvd3SmY9hJoGNoASoa-JXP-B0";
const fbFunctions = myFirebase.functions();
export const functions = fbFunctions;

