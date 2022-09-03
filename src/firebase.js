import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2cG5vHis2KZCRLYav1qahVBT145N8TtU",
    authDomain: "geekhaven-bd73b.firebaseapp.com",
    projectId: "geekhaven-bd73b",
    storageBucket: "geekhaven-bd73b.appspot.com",
    messagingSenderId: "446361583578",
    appId: "1:446361583578:web:a8af737f31de9815ac4ae3",
    measurementId: "G-X5TMFV009C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db



