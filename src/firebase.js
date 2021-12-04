import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCRpqu80JdFeeKLK-_UABw6gsbuZU0A2Ag",
  authDomain: "facebook-clone-39909.firebaseapp.com",
  projectId: "facebook-clone-39909",
  storageBucket: "facebook-clone-39909.appspot.com",
  messagingSenderId: "867751134741",
  appId: "1:867751134741:web:9138a3aa650c0e4f1a301c"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider }
export default db