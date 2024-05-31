import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCWAaal6wKrDKlO5eIugcEVcl-1BLxZSEA',
    authDomain: 'vivafurniturenodejs.firebaseapp.com',
    projectId: 'vivafurniturenodejs',
    storageBucket: 'vivafurniturenodejs.appspot.com',
    messagingSenderId: '296925806724',
    appId: '1:296925806724:web:4793e6aa49137a516842d1',
    measurementId: 'G-JJ3ZK4CLDV'
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
