import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaTO2rlt1gXh1Ij7it_2MGEtjHkrley9Y",
    authDomain: "message-46849.firebaseapp.com",
    projectId: "message-46849",
    storageBucket: "message-46849.appspot.com",
    messagingSenderId: "352950721287",
    appId: "1:352950721287:web:3f68edd685ebc8b45943a2",
    measurementId: "G-RG6LTDRJ7V"
})

const db = firebaseApp.firestore()

export default db