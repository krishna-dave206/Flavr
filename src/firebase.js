import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { data } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyBcxmqKWrSiC2TU-Q9UltfwE4Kmrg2C46g",
    authDomain: "flavr-ecb47.firebaseapp.com",
    projectId: "flavr-ecb47",
    storageBucket: "flavr-ecb47.firebasestorage.app",
    messagingSenderId: "541019350033",
    appId: "1:541019350033:web:f187238e58de14ca763db0",
    databaseURL: "https://flavr-ecb47-default-rtdb.firebaseio.com/",
    measurementId: "G-5MK8CRLZ4Z"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
