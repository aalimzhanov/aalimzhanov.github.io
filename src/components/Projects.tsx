import React from "react";

interface Project {
	id: number;
	title: string;
	description: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
}

const Projects: React.FC = () => {
	const projects: Project[] = [
		{
			id: 1,
			title: "Personal Portfolio",
			description:
				"A responsive portfolio website built with React and TypeScript featuring modern design and smooth animations.",
			technologies: ["React", "TypeScript", "CSS3", "Vite"],
			githubUrl: "https://github.com/aalimzhanov/portfolio",
			liveUrl: "https://aalimzhanov.github.io",
		},
		{
			id: 2,
			title: "CV Builder",
			description:
				"A modern, responsive CV/Resume builder with real-time preview, multiple education and work experience entries, and professional PDF-friendly design.",
			technologies: ["React", "Vite", "CSS3", "PropTypes"],
			githubUrl: "https://github.com/aalimzhanov/CV-Builder",
			liveUrl: "https://cv-builder-sandy-xi.vercel.app/",
		},
		{
			id: 3,
			title: "Weather Dashboard",
			description:
				"A weather dashboard that provides current conditions and forecasts using external APIs.",
			technologies: ["React", "TypeScript", "Vite", "CSS3"],
			githubUrl: "https://github.com/aalimzhanov/weather-app",
			liveUrl: "https://aalimzhanov.github.io/weather-app/",
		},
		{
			id: 4,
			title: "Notes & ToDos",
			description:
				"A collection of small React exercises and components built to practice hooks, state management, and component patterns.",
			technologies: ["React", "TypeScript", "Vite", "CSS3"],
			githubUrl: "https://github.com/aalimzhanov/React-Practice",
			liveUrl: "https://aalimzhanov.github.io/React-Practice/",
		},
	];

	return (
		<section id="projects" className="section">
			<h2>My Projects</h2>
			<div className="projects-grid">
				{projects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="project-info">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className="technologies">
								{project.technologies.map((tech, index) => (
									<span key={index} className="tech-tag">
										{tech}
									</span>
								))}
							</div>
							<div className="project-links">
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										Live Demo
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
