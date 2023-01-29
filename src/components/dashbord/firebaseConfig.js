import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDOzoaEgnf8VqJI2TQK3oz8F8DOo2eY17M",
    authDomain: "notesapp-24358.firebaseapp.com",
    projectId: "notesapp-24358",
    storageBucket: "notesapp-24358.appspot.com",
    messagingSenderId: "779015945571",
    appId: "1:779015945571:web:536190940d3a862a2aa756",
    measurementId: "G-H6D4W8JZNE"
  };

  export const app = initializeApp(firebaseConfig)
  export const database = getFirestore(app)