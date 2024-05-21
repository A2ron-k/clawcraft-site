import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Gallery } from "./components/Gallery";

import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Features />
			<Gallery />
			<Cta />
			<Team />
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
