
let header2replace = document.querySelector("h2");
let parareplace =document.querySelector("p");

var buttonAbout = document.createElement("button");
buttonAbout.innerHTML = "About";
buttonAbout.onclick = function() {
header2replace.innerText ="About";
parareplace.innerText = "Under Construction";
};

document.body.appendChild(buttonAbout);

var buttonAbout = document.createElement("button");
buttonAbout.innerHTML = "Projects";
buttonAbout.onclick = function() {
location.href ="about.html";
header2replace.innerText ="Projects";
parareplace.innerText = "Under Construction";

};
document.body.appendChild(buttonAbout);

var buttonAbout = document.createElement("button");
buttonAbout.innerHTML = "Games";
buttonAbout.onclick = function() {
header2replace.innerText ="Games";
parareplace.innerText = "Under Construction";
};
document.body.appendChild(buttonAbout);

var buttonAbout = document.createElement("button");
buttonAbout.innerHTML = "Contact";
buttonAbout.onclick = function() {
header2replace.innerText ="Contact";
parareplace.innerText = "Under Construction";
};
document.body.appendChild(buttonAbout);