const body = document.querySelector("body"),
	input1 = document.querySelector(".red-input"),
	input2 = document.querySelector(".green-input"),
	lightBtn = document.querySelector(".light"),
	darkBtn = document.querySelector(".dark"),
	h1 = document.querySelector(".h1"),
	randomBtn = document.querySelector(".random");

function setGradientBackgroundToBody() {
	body.style.background = `linear-gradient(to right, ${input1.value},
        ${input2.value})`;
}

function changeToDarkMode() {
	body.style.background = "#2d2d2d";
	h1.style.color = "#fff";
}
function changeToLightMode() {
	body.style.background = "#fff";
	h1.style.color = "#2d2d2d";
}

input1.addEventListener("click", setGradientBackgroundToBody);
input2.addEventListener("click", setGradientBackgroundToBody);
darkBtn.addEventListener("click", changeToDarkMode);
lightBtn.addEventListener("click", changeToLightMode);
