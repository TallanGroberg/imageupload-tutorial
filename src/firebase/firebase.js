import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "super secret keys.....asgvegxgevergfvr",
    storageBucket: "tallans-imageupload-tutorial.appspot.com",
};
  //you will have to replace the keys

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 const storage = firebase.storage()

 export  {
   storage, firebase as default
 }


