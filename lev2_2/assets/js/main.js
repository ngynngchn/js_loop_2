let input = document.querySelector("#num");
let btn = document.querySelector("button");
let output = document.querySelector("p");

btn.addEventListener("click", loopy);

function loopy() {
	let loop = [];
	loop.push("L");
	for (let i = 0; i < input.value; i++) {
		loop.push("o");
	}
	loop.push("p");
	output.innerHTML = loop.join("");
}
