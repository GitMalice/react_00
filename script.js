const rootEl = document.getElementById("root");
const el = document.createElement("div");

el.textContent = "Hello World";
el.className = "container";

rootEl.appendChild(el);

let firstname = "Ronald";

//bonus
const newLine = document.createElement("p");

newLine.textContent = `Wesh bien ${firstname}  ??`;

rootEl.appendChild(newLine);
