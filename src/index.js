import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app"
import App from './App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzvI0J6Rg1nGMwi_Z40YVWuqmEBoD6-Q8",
  authDomain: "matienda-638d0.firebaseapp.com",
  projectId: "matienda-638d0",
  storageBucket: "matienda-638d0.appspot.com",
  messagingSenderId: "471261840327",
  appId: "1:471261840327:web:350d44f678716aa4458fe2"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

