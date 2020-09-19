import app from "firebase/app";
import "firebase/firebase-firestore";

// no need for advanced configuration here
const config = {
  apiKey: "AIzaSyDe6iXjyxKHtabHf4jVwbA-hxxk-yiMihU",
  authDomain: "leboncointest-6fe1b.firebaseapp.com",
  databaseURL: "https://leboncointest-6fe1b.firebaseio.com",
  projectId: "leboncointest-6fe1b",
  storageBucket: "leboncointest-6fe1b.appspot.com",
  messagingSenderId: "750651101504",
  appId: "1:750651101504:web:6b78bf3fe830e0a2082aa5",
};

export interface FirebaseService {
  messages: () => any;
}

export default class Firebase {
  db: any;
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
  }

  /**
   * Messages collection handler
   */
  messages() {
    return this.db.collection("messages");
  }
}
