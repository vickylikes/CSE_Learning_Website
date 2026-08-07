// ==============================
// Firebase Configuration
// ==============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
getAuth,
GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyBa135Wk2b7shWA0GUPGdMTbEjWYKMXMKI",

authDomain: "vickylikes-9485c.firebaseapp.com",

projectId: "vickylikes-9485c",

storageBucket:  "vickylikes-9485c.firebasestorage.app" ,

messagingSenderId: "62108852054",

appId: "1:62108852054:web:fc856e6d7bf577601700f7"

};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();