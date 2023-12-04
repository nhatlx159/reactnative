import { firebase } from '@react-native-firebase/app';

// const firebaseConfig = {
//     apiKey: 'AIzaSyAvU6A8tCQJXDF8CDM5A5SsYwu2LwSrwR0',
//     projectId: 'appchat-storage',
//     storageBucket: 'appchat-storage.appspot.com',
//     messagingSenderId: '619474222824',
//     appId: '1:619474222824:android:254d78ee10f589bfe8135d',
// };
const firebaseConfig = {
    apiKey: "AIzaSyD2PbfvbM0YgW5CQz98gQ6DsWzWlXEuuuY",
    authDomain: "appchat-storage.firebaseapp.com",
    projectId: "appchat-storage",
    storageBucket: "appchat-storage.appspot.com",
    messagingSenderId: "619474222824",
    appId: "1:619474222824:web:5eaac5d458ea9100e8135d",
    measurementId: "G-5P09ZHCVDP"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD2PbfvbM0YgW5CQz98gQ6DsWzWlXEuuuY",
//   authDomain: "appchat-storage.firebaseapp.com",
//   projectId: "appchat-storage",
//   storageBucket: "appchat-storage.appspot.com",
//   messagingSenderId: "619474222824",
//   appId: "1:619474222824:web:5eaac5d458ea9100e8135d",
//   measurementId: "G-5P09ZHCVDP"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);