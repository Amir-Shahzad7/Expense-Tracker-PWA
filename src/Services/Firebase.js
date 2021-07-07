import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPorc5X6yyeEe3KbVGcGzd2mlgybKjrPs",
  authDomain: "expense-tracker-pwa-a5c93.firebaseapp.com",
  projectId: "expense-tracker-pwa-a5c93",
  storageBucket: "expense-tracker-pwa-a5c93.appspot.com",
  messagingSenderId: "635066345035",
  appId: "1:635066345035:web:670b83c0eb16dad63a0fce",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function getNotifications() {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        messaging.getToken().then((currentToken) => {
          if (currentToken) {
            console.log("Token = ", currentToken);
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        });
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
}
