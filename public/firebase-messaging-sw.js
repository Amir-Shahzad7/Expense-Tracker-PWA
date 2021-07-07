/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCPorc5X6yyeEe3KbVGcGzd2mlgybKjrPs",
  authDomain: "expense-tracker-pwa-a5c93.firebaseapp.com",
  projectId: "expense-tracker-pwa-a5c93",
  storageBucket: "expense-tracker-pwa-a5c93.appspot.com",
  messagingSenderId: "635066345035",
  appId: "1:635066345035:web:670b83c0eb16dad63a0fce",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();