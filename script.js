// ================= ELEMENTS =================

const passwordScreen = document.getElementById("passwordScreen");
const welcomeScreen = document.getElementById("welcomeScreen");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");

const surpriseBtn = document.getElementById("surpriseBtn");
const error = document.getElementById("error");

// ================= PASSWORD =================

const PASSWORD = "Falak123";

unlockBtn.addEventListener("click", checkPassword);

passwordInput.addEventListener("keypress", function(e){

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

if(passwordInput.value===PASSWORD){

passwordScreen.classList.remove("active");

welcomeScreen.classList.add("active");

}

else{

error.innerHTML="❌ Wrong Password";

passwordInput.classList.add("shake");

setTimeout(()=>{

passwordInput.classList.remove("shake");

},500);

}

}

// ================= SURPRISE =================

surpriseBtn.addEventListener("click",()=>{

alert("🎉 Welcome Falak ❤️");

// Part 4 mein Game Screen open hogi.

});
