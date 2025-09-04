import React from "react";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="section">
			<h2>Get In Touch</h2>
			<div className="contact-content">
				<p>I'm always interested in new opportunities and collaborations.</p>
				<div className="contact-links">
					<a href="mailto:aalimzhanov@mta.ca" className="contact-link">
						Email
					</a>
					<a
						href="https://linkedin.com/in/aalimzhanov"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-link"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/aalimzhanov"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-link"
					>
						GitHub
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
