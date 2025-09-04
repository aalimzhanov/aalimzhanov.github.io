import React from "react";

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav className="nav">
				<a href="#home" className="logo">
					Adil Alimzhanov
				</a>
				<ul className="nav-links">
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
