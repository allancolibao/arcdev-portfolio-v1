import * as firebase from "firebase/app";
import "firebase/analytics";

    const firebaseConfig = {
        apiKey: "AIzaSyCYDXhtPxJOQ2onYEo-Nv1rSzGfaZKf79Q",
        authDomain: "arcdev-portfolio.firebaseapp.com",
        databaseURL: "https://arcdev-portfolio.firebaseio.com",
        projectId: "arcdev-portfolio",
        storageBucket: "arcdev-portfolio.appspot.com",
        messagingSenderId: "637162258485",
        appId: "1:637162258485:web:b4241b1d3ad5ced93b717c",
        measurementId: "G-RVZHL4XL7T"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();