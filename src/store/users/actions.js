import {firebaseAuth, firestoreDatabase} from 'src/boot/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { Loading } from 'quasar';

export function registerUser ({commit,dispatch}, payload) {
Loading.show()
createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
  .then(({user}) => {
    console.log("register", user.uid)
     setDoc(doc(firestoreDatabase, "users", user.uid), {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email
      });
      Loading.hide()
      this.$router.push('/home')
  })
  .catch((error) => {
    Loading.hide()
    console.log(error.message)
  });
}

export function loginUser({}, payload) {
    Loading.show()
    signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
    .then(({user}) => {
        Loading.hide()
        this.$router.push('/home')
    })
    .catch((error)=> {
        Loading.hide()
        console.log(error.message)
    })
}

export function logoutUser({commit},payload) {
    signOut(firebaseAuth).then(() => {
        commit('userLoggedIn',false)
      }).catch((error) => {
        console.log(error.message)
      });
}