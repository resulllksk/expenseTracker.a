// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 
import { getFirestore } from 'firebase/firestore'; // Eğer firestore kullanıyorsanız

const firebaseConfig = {
  apiKey: "AIzaSyDOTq1prC-9gCTOOIVeY11oNlbgbDu6PC0",
  authDomain: "expensetracker-150f4.firebaseapp.com",
  projectId: "expensetracker-150f4",
  storageBucket: "expensetracker-150f4.appspot.com",
  messagingSenderId: "816879241267",
  appId: "1:816879241267:web:e7dabe846e5d349b557b46",
  measurementId: "G-6P54ZLD4JT"
};

const app = initializeApp(firebaseConfig);

// AsyncStorage kullanarak Auth'u kalıcı hale getiriyoruz
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const firestore = getFirestore(app); // Eğer firestore kullanıyorsanız

export { auth, firestore };
