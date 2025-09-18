import { FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpeg";

export default function Hero() {
	// Use Vite base URL to work on GitHub Pages and local dev
	const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

	return (
		<section id="home" className="hero">
			<div className="hero-content">
				<img src={headshot} alt="Adil Alimzhanov" className="hero-image" />
				<div className="hero-text">
					<header>
						<h1>Hi, I'm Adil!</h1>
						<nav className="socials" aria-label="Social links">
							<a
								href="https://github.com/aalimzhanov"
								target="_blank"
								rel="noopener"
								aria-label="GitHub"
							>
								<FaGithub />
							</a>
						</nav>
					</header>
					<h2>
						Computer Science & Mathematics Graduate from Mount Allison
						University
					</h2>
					<div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
						<a href="#projects" className="cta-button">
							View My Work
						</a>
						<a
							href={resumeUrl}
							className="cta-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
