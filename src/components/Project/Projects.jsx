import React, { useState } from "react";
import "../../styles/projects/projects.css";
import bloghub_home from "../../assets/bloghub_home1.png";
import bloghub_blogs from "../../assets/bloghub_blogs.png";
import bloghub_logo from "../../assets/logo_transparent2.png";
import { FiGithub } from "react-icons/fi";
import { MdOutlineLaunch } from "react-icons/md";

export default function Projects() {
	const [blog, setBlog] = useState(true);
	const [home, setHome] = useState(false);

	const style_1 = {
		gridColumn: "2 / -1",
		gridRow: "2 / -1",
		zIndex: "3",
	};

	const style_2 = {
		gridColumn: "1 / 3",
		gridRow: "1 / 3",
		zIndex: "4",
	};

	// console.log(name);

	return (
		<div className="projects__container">
			<div className="title">
				<h1>Projects</h1>
			</div>
			<div className="title_up">
				<h1>Recent Projects</h1>
			</div>
			<hr />

			<div className="projects">
				<div className="project bloghub">
					<div className="details">
						<div className="project_logo">
							<p className="featured">Featured Project</p>
							<h2>Bloghub</h2>
						</div>
						<div className="desc">
							<ul>
								<li>
									<p>
										<span>Bloghub</span> is a fully functional blogging website inspired by{" "}
										<a href="http://medium.com" target="_blank" rel="noreferrer">
											Medium.
										</a>{" "}
										Users can register, login, and post. Blogs can be sorted and searched according
										to their categories or authors while it uses CKeditor5 rich text editor to write
										and publish new posts.
									</p>
								</li>
								<li>
									<p>
										I added Web Scraping to find and show the most trending blogs from several
										popular websites and It is easy to search blogs depending on host website names.
									</p>
								</li>
							</ul>
						</div>
						<div className="technologies">
							<p>React Js</p>
							<p>Node Js</p>
							<p>Express Js</p>
							<p>mongoDB</p>
							<p>bcrypt</p>
							<p>Sass</p>
						</div>
						<div className="redirect">
							<button>View Site</button>
							<FiGithub className="icon github" />
						</div>
					</div>
					<div className="image">
						<img
							className={home ? "home" : "home behind"}
							src={bloghub_home}
							onClick={(e) => {
								setHome(true);
								setBlog(false);
							}}
							alt=""
						/>
						<img
							className={blog ? "blog" : "blog behind"}
							src={bloghub_blogs}
							onClick={(e) => {
								setBlog(true);
								setHome(false);
							}}
							alt=""
						/>
					</div>
				</div>
				<div className="project portfolio">
					<div className="details">
						<div className="project_logo">
							<p className="featured">Featured Project</p>
							<h2>Bloghub</h2>
						</div>
						<div className="desc">
							<ul>
								<li>
									<p>
										<span>Bloghub</span> is a fully functional blogging website inspired by{" "}
										<a href="http://medium.com" target="_blank" rel="noreferrer">
											Medium.
										</a>{" "}
										Users can register, login, and post. Blogs can be sorted and searched according
										to their categories or authors while it uses CKeditor5 rich text editor to write
										and publish new posts.
									</p>
								</li>
								<li>
									<p>
										I added Web Scraping to find and show the most trending blogs from several
										popular websites and It is easy to search blogs depending on host website names.
									</p>
								</li>
							</ul>
						</div>
						<div className="technologies">
							<p>React Js</p>
							<p>Node Js</p>
							<p>Express Js</p>
							<p>mongoDB</p>
							<p>bcrypt</p>
							<p>Sass</p>
						</div>
						<div className="redirect">
							<button>View Site</button>
							<FiGithub className="icon github" />
						</div>
					</div>
					<div className="image">
						<img
							className={home ? "home" : "home behind"}
							src={bloghub_home}
							onClick={(e) => {
								setHome(true);
								setBlog(false);
							}}
							alt=""
						/>
						<img
							className={blog ? "blog" : "blog behind"}
							src={bloghub_blogs}
							onClick={(e) => {
								setBlog(true);
								setHome(false);
							}}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
