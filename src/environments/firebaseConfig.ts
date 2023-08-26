import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
    apiKey: "AIzaSyCUYT_LLts1SXI3w2SR0Gm5taDdLBWGFuE",
    authDomain: "webwizards-36d51.firebaseapp.com",
    projectId: "webwizards-36d51",
    storageBucket: "webwizards-36d51.appspot.com",
    messagingSenderId: "818672457982",
    appId: "1:818672457982:web:35167031eb95053fdc6daf",
    measurementId: "G-K21WWPTXBJ"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);