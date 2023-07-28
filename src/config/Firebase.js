import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGbusYtn3XQY2RQtdUeaRdTzCPzbVqLn4",
  authDomain: "review-booster-6cf3c.firebaseapp.com",
  projectId: "review-booster-6cf3c",
  storageBucket: "review-booster-6cf3c.appspot.com",
  messagingSenderId: "839362061794",
  appId: "1:839362061794:web:8cc10b72932921a34345bb",
  measurementId: "G-QGWF9D5FRZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

export { auth };
export default app;
