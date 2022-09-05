import firebase from "firebase";

var firebaseConfig = {
    projectId: "disney-clone-74175",
    apiKey: "AIzaSyAlG8f0aAhtThKRX8qDwtAHYAGKll_MZpU",
    authDomain: "disney-clone-74175.firebaseapp.com",
    storageBucket: "disney-clone-74175.appspot.com",
    messagingSenderId: "112122422356",
    appId: "1:112122422356:web:e61c760cd27018cdbcb9c1"
  };

  
  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const db = app.firestore();

  export { db };