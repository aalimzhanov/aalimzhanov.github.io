import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<footer className="footer">
				<p>&copy; 2025 Adil Alimzhanov. All rights reserved.</p>
			</footer>
		</div>
	);
}

export default App;
