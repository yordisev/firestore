import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGjrboShoCN4dSP_h2LLqKeHNgg0P7AmE",
    authDomain: "firestoraut.firebaseapp.com",
    projectId: "firestoraut",
    storageBucket: "firestoraut.appspot.com",
    messagingSenderId: "811579318480",
    appId: "1:811579318480:web:c09c9081074d45ce02fed5"
  };
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const auth = firebase.auth()
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

firebase.getCurrentUser = () =>{
  return new Promise((resolve, reject) => {
const unsuscribe = firebase.auth().onAuthStateChanged(user => {
  unsuscribe()
  resolve(user)
},reject)
  })
}


export {db, auth, marcaTiempo, firebase}