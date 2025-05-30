const projects = [
	{
		image: "./pics/tic-tac-toe.png",
		alt: "Screenshot of Tic-Tac-Toe game",
		title: "Tic-Tac-Toe",
		github:
			"https://github.com/aalimzhanov/front-end-practice/tree/main/tic-tac-toe",
		description:
			"A simple Tic-Tac-Toe game written using HTML, CSS, and JavaScript.",
		tech: ["html5", "css3-alt", "js"],
	},
	{
		image: "./pics/etch-a-sketch.png",
		alt: "Screenshot of Etch-a-Sketch app",
		title: "Etch-a-Sketch",
		github:
			"https://github.com/aalimzhanov/front-end-practice/tree/main/etch-a-sketch",
		description:
			"Digital rendition of the classic drawing toy. Users can select the size of their drawing, glide across the squares to draw, and reset the board.",
		tech: ["html5", "css3-alt", "js"],
	},
	{
		image: "./pics/dashboard.png",
		alt: "Screenshot of Dashboard project",
		title: "Dashboard",
		github:
			"https://github.com/aalimzhanov/front-end-practice/tree/main/dashboard-project",
		description: "A simple dashboard template.",
		tech: ["html5", "css3-alt", "js"],
	},
];

function getTechIcons(techs) {
	return techs
		.map((t) => `<i class="fab fa-${t}" title="${t.toUpperCase()}"></i>`)
		.join("");
}

function renderProjects() {
	const container = document.getElementById("projects-container");
	container.innerHTML = projects
		.map(
			(project) => `
    <article class="project-card">
      <img src="${project.image}" alt="${project.alt}" loading="lazy" />
      <div class="project-header">
        <h3>${project.title}</h3>
        <a href="${
					project.github
				}" target="_blank" rel="noopener" aria-label="${project.title} GitHub">
          <i class="fa fa-github"></i>
        </a>
      </div>
      <p>${project.description}</p>
      <div class="tech-icons" aria-label="Technologies used">
        ${getTechIcons(project.tech)}
      </div>
    </article>
  `
		)
		.join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
