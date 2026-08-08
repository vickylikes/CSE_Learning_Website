import { auth, provider } from "./firebase-config.js";

import {
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


export async function loginWithGoogle(){

    try{

        await signInWithPopup(auth, provider);

        window.location.href = "getting_started.html";

    }

    catch(error){

        console.error("Google Login Error:", error);

        alert("Google Sign-In failed. Please try again.");

    }

}


export async function logoutUser(){

    try{

        await signOut(auth);

        location.reload();

    }

    catch(error){

        console.error("Logout Error:", error);

    }

}


onAuthStateChanged(auth,(user)=>{

    if(user){

        console.log("Logged in:",user.displayName);

    }else{

        console.log("Not logged in");

    }

});
