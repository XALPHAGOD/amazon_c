import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYt3OBasAYR2JcqwRH9OpkvsEFURa05ZE",
  authDomain: "c-823e8.firebaseapp.com",
  projectId: "c-823e8",
  storageBucket: "c-823e8.appspot.com",
  messagingSenderId: "955147443749",
  appId: "1:955147443749:web:e498c889c100d2d46669cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
