import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA543CBHN-oBNl9tTCxNmX-3L3HFlpLHz8",
  authDomain: "horizon-data-academy.firebaseapp.com",
  projectId: "horizon-data-academy",
  storageBucket: "horizon-data-academy.appspot.com",
  messagingSenderId: "172339457409",
  appId: "1:172339457409:web:89a6d20a33cee1f6b30c80",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
