import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyAgnaTPk1-0UJooXGa3-qrsesBEhohIoZc",
    authDomain: "crown-db-c46b7.firebaseapp.com",
    projectId: "crown-db-c46b7",
    storageBucket: "crown-db-c46b7.appspot.com",
    messagingSenderId: "419230065450",
    appId: "1:419230065450:web:d5770046250656d5447453",
    measurementId: "G-NEVFCPBMZF"
};

firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;

  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
  
        try{
          await userRef.set({
            displayName, email, createdAt, ...additionalData
          })
        } catch(error){
          console.log('error creating user', error.message);
        }
    }
  
    return userRef;
  }
  
  