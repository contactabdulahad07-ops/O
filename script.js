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
// ================= GAME =================

const gameScreen = document.getElementById("gameScreen");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");

let score = 0;

// Surprise Button

surpriseBtn.addEventListener("click",()=>{

welcomeScreen.classList.remove("active");

gameScreen.classList.add("active");

startGame();

});

function startGame(){

score=0;

scoreText.innerHTML="0 / 10";

gameArea.innerHTML="";

let interval=setInterval(createHeart,700);

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*250+"px";

gameArea.appendChild(heart);

heart.onclick=()=>{

score++;

scoreText.innerHTML=score+" / 10";

heart.remove();

if(score>=10){

clearInterval(interval);

setTimeout(()=>{

alert("🎉 You Win ❤️");

// Part 5 mein Cake Cutting Screen open hogi.

},700);

}

};

setTimeout(()=>{

heart.remove();

},4000);

}

}
// ================= CAKE SCREEN =================

const cakeScreen = document.getElementById("cakeScreen");
const birthdayCake = document.getElementById("birthdayCake");
const cutCakeBtn = document.getElementById("cutCakeBtn");

// Game Complete

function openCakeScene(){

gameScreen.classList.remove("active");

cakeScreen.classList.add("active");

}

// Game Win

// Part 4 mein jahan alert("🎉 You Win ❤️") hai,
// usko remove karke sirf ye likho:
//
// openCakeScene();

cutCakeBtn.addEventListener("click",()=>{

birthdayCake.classList.add("cake-cut");

cutCakeBtn.innerHTML="🎉 Cake Cut Successfully";

setTimeout(()=>{

alert("🎂 Happy Birthday Falak My Love ❤️");

// Part 6 mein Promise Screen open hogi.

},1000);

});
// ================= FINAL SCENES =================

const promiseScreen = document.getElementById("promiseScreen");
const loveScreen = document.getElementById("loveScreen");
const finalScreen = document.getElementById("finalScreen");

const promiseBtn = document.getElementById("promiseBtn");
const finishBtn = document.getElementById("finishBtn");

// Cake Button

cutCakeBtn.addEventListener("click",()=>{

cakeScreen.classList.remove("active");

promiseScreen.classList.add("active");

});

// Promise Button

promiseBtn.addEventListener("click",()=>{

promiseScreen.classList.remove("active");

loveScreen.classList.add("active");

});

// Finish Button

finishBtn.addEventListener("click",()=>{

loveScreen.classList.remove("active");

finalScreen.classList.add("active");

});
