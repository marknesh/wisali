import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"



const config=firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})


const app=!firebase.apps.length?firebase.initializeApp(config):firebase.app()

const auth=app.auth()
const provider=new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const db=firebase.firestore()
provider.addScope('profile')
provider.addScope('email');
facebookProvider.addScope('public_profile');

export {auth,provider,facebookProvider,db,twitterProvider}