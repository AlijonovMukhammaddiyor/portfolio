import React, { useState, useEffect } from "react";
import "../../styles/home/heom.css";
// import blob1 from "../../assets/my_blob.svg";
// import boy from "../../assets/profile-boy-removebg-preview.png";
import banner from "../../assets/banner1.png";
import Typist from "react-typist";

export default function Home() {
	const names = ["Full-stack Developer", "Student", "ML Enthusiast"];

	const [count, setCount] = useState(1);
	let who = 0;

	useEffect(() => {
		setCount(1);
	}, [count]);

	return (
		<div className="home__container">
			<div className="back_pattern circle"></div>
			{/* <object data={blob1} type="image/svg+xml" className="back_pattern blob1">
				blob
			</object> */}
			{/* <div className="back_pattern third"></div> */}
			<div className="intro">
				<div className="back_pattern hello">
					<p>HeLLO</p>
				</div>
				<h1 className="title">I am</h1>
				<div className="me">
					<h1 className="title name">Mukhammaddiyor</h1>
				</div>

				{count && (
					<Typist
						avgTypingDelay={40}
						startDelay={0}
						cursor={{ show: false }}
						onTypingDone={() => setCount(0)}
					>
						<div className={who === 2 ? "who ml" : who === 1 ? "who st" : "who fsd"}>
							{names.map((name, index) => {
								return (
									<h1 key={index}>
										{name}
										<Typist.Backspace count={name.length} delay={3000} />
									</h1>
								);
							})}
						</div>
					</Typist>
				)}

				<p className="bio">
					I love to code and make beautiful things. Currently being a student majoring in Computer
					Science at KAIST, I really look forward to contributing to and making real world projects
					which can have a meningful influence on the lives of those around me.
				</p>
				{/* <div className="button-dld"> */}
				<button className="download">Download Resume</button>
				{/* </div> */}
			</div>
			<img src={banner} className="banner" alt="" />
		</div>
	);
}
