import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firestore = firebase.firestore();

console.log(firestore);

//methods to access firebase data
firestore.collection('users').doc('4hhEUk6XzieukeDknsUu').collection('cartItems').doc('8VxEzCBhPwC0Q6FzOj8L')
firestore.doc('users/4hhEUk6XzieukeDknsUu/cartItems/8VxEzCBhPwC0Q6FzOj8L')
firestore.collection('users/4hhEUk6XzieukeDknsUu/cartItems')