const input = document.getElementById("input");
const h1 = document.getElementsByTagName("h1");
const body = document.getElementsByTagName("body");
const container = document.getElementsByClassName("container");

const firstAndOnlyBody = body[0];

// Style our input element
// input.style.border = "2px solid red";
// input.style.padding = "1rem";

const p = document.createElement("p");
p.textContent = "Created via JS";

container[0].appendChild(p);
console.log(firstAndOnlyBody.innerHTML);
