import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/portfolio" element={<Portfolio />}/>
				<Route path="/" element={<Home />}/>
				<Route path="/resume" element={<Resume />} /> 
				<Route path="/contact" element={<Contact />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
