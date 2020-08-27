import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAG1O62bs1wtRJCZQ6vz20tQqmkDs2SzPc",
    authDomain: "healthier-74447.firebaseapp.com",
    databaseURL: "https://healthier-74447.firebaseio.com",
    projectId: "healthier-74447",
    storageBucket: "healthier-74447.appspot.com",
    messagingSenderId: "1010027232091",
    appId: "1:1010027232091:web:da8fb4ee4cf3e1df4cb87e"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore()