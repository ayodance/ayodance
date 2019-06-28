import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyARId6dhOdtLtIWSryQu4UKLlOrak85f64",
  authDomain: "ayodance-11fe0.firebaseapp.com",
  databaseURL: "https://ayodance-11fe0.firebaseio.com",
  projectId: "ayodance-11fe0",
  storageBucket: "ayodance-11fe0.appspot.com",
  messagingSenderId: "554060652027",
  appId: "1:554060652027:web:47a2879ac3cedef6"
};

firebase.initializeApp(firebaseConfig)

var db = firebase.firestore()

export default db