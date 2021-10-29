import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import "./styles/app/app.css";
import Footer from "./components/footer/Footer";

export default function App() {
	return (
		<div className="app__container">
			<Navbar />
			{/* <Home /> */}
			<About />
			<Footer />
		</div>
	);
}
