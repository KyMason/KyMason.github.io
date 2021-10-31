var buttonAbout = document.createElement("button");

buttonAbout.innerHTML = "About";
buttonAbout.onclick = function() 
{
location.href ="index.html";
header2replace.innerText ="About";
parareplace.innerText = "Under Construction";
};
document.body.appendChild(buttonAbout);

var buttonProjects = document.createElement("button");

buttonProjects.innerHTML = "Projects";
buttonProjects.onclick = function() 
{
location.href ="Projects.html";
header2replace.innerText ="Projects";
parareplace.innerText = "Under Construction";
};
document.body.appendChild(buttonProjects);

var buttonContact = document.createElement("button");

buttonContact.innerHTML = "Contact";
buttonContact.onclick = function() 
{
location.href ="Contact.html";
header2replace.innerText ="Projects";
parareplace.innerText = "Under Construction";
};
document.body.appendChild(buttonContact);