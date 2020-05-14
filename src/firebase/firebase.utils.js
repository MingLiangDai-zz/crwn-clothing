import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyColUHvrZuZh-OoYpHbTt6ZOv-u0zL5oLU",
  authDomain: "crwn-db-c4318.firebaseapp.com",
  databaseURL: "https://crwn-db-c4318.firebaseio.com",
  projectId: "crwn-db-c4318",
  storageBucket: "crwn-db-c4318.appspot.com",
  messagingSenderId: "973866669485",
  appId: "1:973866669485:web:c6cee4e40b42a8b3d37d24",
  measurementId: "G-1QZ6R2MQZE",
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
