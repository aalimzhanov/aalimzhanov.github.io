import React from "react";

const About: React.FC = () => {
	return (
		<section id="about" className="section">
			<h2>About Me</h2>
			<div className="about-content">
				<div className="about-text">
					<p>
						Originally from Kazakhstan, I moved to Canada in the winter of 2021
						to pursue higher education at Mount Allison University. I graduated
						in May 2025 with a Bachelor of Science in Computer Science and
						Mathematics. Throughout my time at Mount Allison, I actively engaged
						in campus life through a variety of leadership roles, including
						serving as International Orientation Chair, Head Mentor, and
						International Projects Intern. Academically, I worked as a Teaching
						Assistant for the Data Structures and Algorithms course and as a
						Research Assistant in the Psychology Department, where I developed
						software to support data collection for ongoing research.
					</p>
					<p>
						I’m currently seeking a full-time opportunity in software
						development where I can apply my technical skills, leadership
						experience, and passion for problem-solving.
					</p>
				</div>
				<div className="skills">
					<div className="skill">React</div>
					<div className="skill">TypeScript</div>
					<div className="skill">JavaScript</div>
					<div className="skill">Node.js</div>
					<div className="skill">Python</div>
					<div className="skill">Java</div>
				</div>
			</div>
		</section>
	);
};

export default About;
