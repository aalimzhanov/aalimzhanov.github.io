import React from "react";
import { FaGithub } from "react-icons/fa";
import headshot from "../assets/headshot.jpeg";

const Hero: React.FC = () => {
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
					<a href="#projects" className="cta-button">
						View My Work
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
