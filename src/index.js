import loadAboutMe from "./about.js";
import loadProjects from "./projects.js";
import loadContactMe from "./contacts.js";

document.getElementById("button-about-me").addEventListener("click", () => {
	loadAboutMe();
});

document.getElementById("button-projects").addEventListener("click", () => {
	loadProjects();
});
document.getElementById("button-contacts").addEventListener("click", () => {
	loadContactMe();
});
loadAboutMe();
