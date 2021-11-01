import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/About/About";
import "./styles/app/app.css";
import Footer from "./components/footer/Footer";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Bounce } from "react-reveal";

export default function App() {
	return (
		<div className="app__container">
			<Navbar />
			<Router>
				<Switch>
					<Route exact path={"/"}>
						<Home />
					</Route>
					<Route exact path={"/resume"}>
						<About />
					</Route>
					<Route exact path={"/projects"}>
						<Projects />
					</Route>
					<Route exact path={"/contact"}>
						<Contact />
					</Route>
				</Switch>
			</Router>
			<Bounce bottom duration={1500}>
				<Footer />
			</Bounce>
		</div>
	);
}
