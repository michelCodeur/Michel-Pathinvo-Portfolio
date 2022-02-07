import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Hello from './Components/Hello/Hello';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
	return (
		<>
			<Home />
			<Navigation />
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Hello />} />
				<Route path='/aboutme' element={<AboutMe />} />
				<Route path='/contactme' element={<ContactMe />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/skills' element={<Skills />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
