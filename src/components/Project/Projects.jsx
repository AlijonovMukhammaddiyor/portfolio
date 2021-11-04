import React, { useState } from "react";
import "../../styles/projects/projects.css";
import bloghub_home from "../../assets/bloghub_home1.png";
import bloghub_blogs from "../../assets/bloghub_blogs.png";
import portfolio from "../../assets/portfolio.png";
import { FiGithub } from "react-icons/fi";
import { Bounce } from "react-reveal";
import tracker from "../../assets/Screen Shot 2021-11-05 at 1.12.37 AM.png";

export default function Projects() {
	const [blog, setBlog] = useState(true);
	const [home, setHome] = useState(false);

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
				<Bounce bottom duration={1500}>
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
											Users can register, login, and post. Blogs can be sorted and searched
											according to their categories or authors while it uses CKeditor5 rich text
											editor to write and publish new posts.
										</p>
									</li>
									<li>
										<p>
											I added Web Scraping to find and show the most trending blogs from several
											popular websites and It is easy to search blogs depending on host website
											names.
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
								<p>mongoose</p>
								<p>axios</p>
							</div>
							<div className="redirect">
								<a
									className="view"
									href="https://bloghubs.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									View the site
								</a>
								<a
									href="https://github.com/AlijonovMukhammaddiyor"
									target="_blank"
									rel="noreferrer"
								>
									<FiGithub className="icon github" />
								</a>
							</div>
						</div>
						<div className="image_out">
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

						<div className="project_title">
							<h2>Bloghub</h2>
							<p className="featured">Featured Project</p>
						</div>
					</div>
				</Bounce>
				<Bounce bottom duration={1500}>
					<div className="project portfolio">
						<div className="details">
							<div className="project_logo">
								<p className="featured">Featured Project</p>
								<h2>Portfolio</h2>
							</div>
							<div className="desc">
								This is my portfolio website that is including my noteworthy projects and resume. I
								used React js for the most part and Sass to style.
							</div>
							<div className="technologies">
								<p>React Js</p>
								<p>React Typist</p>
								<p>Sass</p>
							</div>
							<div className="redirect">
								<a
									className="view"
									href="https://mukhammaddiyor.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									View the site
								</a>

								<a
									href="https://github.com/AlijonovMukhammaddiyor"
									target="_blank"
									rel="noreferrer"
								>
									<FiGithub className="icon github" />
								</a>
							</div>
						</div>
						<div className="image">
							<img src={portfolio} alt="" />
						</div>
						<div className="project_title">
							<h2>Portfolio</h2>
							<p className="featured">Featured Project</p>
						</div>
					</div>
				</Bounce>
				<Bounce bottom duration={1500}>
					<div className="project tracker">
						<div className="details">
							<div className="project_logo">
								<p className="featured">Featured Project</p>
								<h2>TrackIt</h2>
							</div>
							<div className="desc">
								A website to track changes in cryptocurrencies. Users can search and filter
								cryptocurrencies according to their names while it is possible to sort them in any
								order.
							</div>
							<div className="technologies">
								<p>React Js</p>
								<p>APIs</p>
								<p>Sass</p>
							</div>
							<div className="redirect">
								<a
									className="view"
									href="https://trackit-crypto.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									View the site
								</a>

								<a
									href="https://github.com/AlijonovMukhammaddiyor"
									target="_blank"
									rel="noreferrer"
								>
									<FiGithub className="icon github" />
								</a>
							</div>
						</div>
						<div className="image">
							<img src={tracker} alt="" />
						</div>
						<div className="project_title">
							<h2>TrackIt</h2>
							<p className="featured">Featured Project</p>
						</div>
					</div>
				</Bounce>
			</div>
		</div>
	);
}
