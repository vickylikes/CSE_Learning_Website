import { auth, provider } from "./firebase-config.js";

import {
signInWithPopup,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

window.loginWithGoogle = async function () {

    try{

        await signInWithPopup(auth, provider);

        window.location.href="getting_started.html";

    }

    catch(error){

        alert(error.message);

    }

};

window.logoutUser = async function(){

    await signOut(auth);

    location.reload();

};

onAuthStateChanged(auth,(user)=>{

    if(user){

        console.log("Logged in:",user.displayName);

    }else{

        console.log("Not logged in");

    }

});