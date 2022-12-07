import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Navbar from './components/Navbar';
import Home from './views/Home';
// import Users from './views/Users';
// import Login from './views/Login';
// import Donate from './views/Donate';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio'

const stripe = loadStripe('pk_test_51Lz1tKGMohygrU9zze1I0wkzVpb4vR0yl03Sqy8Fuedh9wt7V0C6Kz4hp3Wggqp6hGPwcJE9YhvUQmEN7t05RA3M002m7O6FxA');

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/portfolio" element={<Portfolio />}/>
				<Route path="/" element={<Home />}/>
				{/* <Route path="/users" element={<Users />}/> */}
				{/* <Route path="/donate" element={ */}
					{/* <Elements stripe={stripe}>
						<Donate />	
					</Elements>}/>
				<Route path="/Login" element={<Login />}/> */}
				<Route path="/contact" element={<Contact />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
