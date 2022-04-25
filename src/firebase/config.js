import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCOi57yQFNT5ub6Pkd9Jr7HDcYy0P1gUDc',
  authDomain: 'thevitedojo.firebaseapp.com',
  projectId: 'thevitedojo',
  storageBucket: 'thevitedojo.appspot.com',
  messagingSenderId: '785941770116',
  appId: '1:785941770116:web:a4a96fd3a907f5a021f7d1',
}

// init firebase services
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectAuth, projectFirestore, timestamp }
