import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Showcase />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
