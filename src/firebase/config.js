import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZS_uTxrETz4cxRm1GYGzI6Pbv3rD_y_A",
  authDomain: "miniblog-7ff19.firebaseapp.com",
  projectId: "miniblog-7ff19",
  storageBucket: "miniblog-7ff19.appspot.com",
  messagingSenderId: "277856586247",
  appId: "1:277856586247:web:68b94175af7be60bdbf8a2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
