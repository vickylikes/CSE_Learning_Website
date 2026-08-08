import { auth } from "./firebase-config.js";
import { loginWithGoogle } from "./auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const navButton=document.getElementById("navGettingStarted");
const cardButton=document.getElementById("gettingStartedBtn");

function openLogin(){

const modal=document.createElement("div");

modal.innerHTML=`

<div id="loginOverlay">

<div id="loginBox">

<h2>Sign in Required</h2>

<p>Please sign in to access the course.</p>

<button id="googleLogin">

Continue with Google

</button>

<button id="closeLogin">

Cancel

</button>

</div>

</div>

`;

document.body.appendChild(modal);

document.getElementById("googleLogin").onclick=()=>{

loginWithGoogle();

};

document.getElementById("closeLogin").onclick=()=>{

modal.remove();

};

}

function checkAccess(e){

e.preventDefault();

onAuthStateChanged(auth,(user)=>{

if(user){

window.location.href="getting_started.html";

}

else{

openLogin();

}

});

}

navButton?.addEventListener("click",checkAccess);

cardButton?.addEventListener("click",checkAccess);
