import React, { useState } from "react";
import student from "../../assets/continuous-single-one-drawn-line-260nw-1055811536__1_-removebg-preview.png";
import coder from "../../assets/coder_crop.png";
import "../../styles/about/about.css";
// import buble from "../../assets/blob-haikei2.png";
import pytorch from "../../assets/pytorch_crop1.png";
import pygame from "../../assets/pygame_logo_crop.gif";
import pandas from "../../assets//pandas_crop.png";
import numpy from "../../assets/numpy_crop.png";
import node from "../../assets/nodejs-logo-vector_crop.svg";
import react from "../../assets/react_crop-removebg-preview-removebg-preview.png";
import reactrouter from "../../assets/react-router.png";
import redux from "../../assets/redux_crop.png";
import express from "../../assets/express_crop-removebg-preview.png";
import mongoose from "../../assets/mongoose_crop.png";
import sql from "../../assets/database-logo-microsoft-sql-server-trademark-text-removebg-preview.png";
import mongodb from "../../assets/58481021cef1014c0b5e494b.png";
import html from "../../assets/html_crop.png";
import scss from "../../assets/sass-1-logo (1).png";
import bird from "../../assets/crop_birsd-removebg-preview.png";

const About = () => {
	const [courses, setCourses] = useState(false);

	function showOthers(e) {
		if (!courses) setCourses(true);
	}

	return (
		<div className="resume__container">
			<div className="backscript">
				<h1>Resume</h1>
			</div>
			<hr />
			<div className="resume">
				<div className="row_sketch">
					<div className="about_msg">
						<div className="title">
							<h2>Programming</h2>
						</div>
						<div className="languages">
							<div className="language javascript">
								<div className="l_circle javascript"></div>
								<div className="connect"></div>
								<h3>
									Javascript - <span className="degree">Advanced</span>
								</h3>
								<p className="desc">
									I love Javascript ! It is a very creative language. During the past 1.5 half
									years, It has been my primary language, spending at least 5-6 hours a day on it.
									Some related frameworks and libaries I have learned include the following:
								</p>
								<div className="libraries">
									<ul>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={node} alt="" className="library_logo" />
													<p className="degree"> Intermediate</p>
												</div>

												<div className="progress_bar_default node"></div>
												<div className="progress_bar node"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={react} alt="" className="library_logo react" />
													<p className="degree"> Fluent</p>
												</div>
												<div className="progress_bar_default react"></div>
												<div className="progress_bar react"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={express} alt="" className="library_logo" />
													<p className="degree"> Fluent</p>
												</div>
												<div className="progress_bar_default express"></div>
												<div className="progress_bar express"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={reactrouter} alt="" className="library_logo router" />
													<p className="degree"> Intermediate</p>
												</div>
												<div className="progress_bar_default router"></div>
												<div className="progress_bar router"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={redux} alt="" className="library_logo" />
													<p className="degree"> Beginner</p>
												</div>
												<div className="progress_bar_default redux"></div>
												<div className="progress_bar redux"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={mongoose} alt="" className="library_logo" />
													<p className="degree"> Fluent</p>
												</div>
												<div className="progress_bar_default mongoose"></div>
												<div className="progress_bar mongoose"></div>
											</div>
										</li>
									</ul>
									<div className="other_parts">
										<p className="others_title">Others:</p>
										<ul>
											<li>DOM</li>
											<li>Security</li>
											<li>JQuery</li>
											<li>REST API</li>
											<li>Authentication</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="language python">
								<div className="l_circle python"></div>
								<div className="connect"></div>
								<div className="lan">
									<h3>
										Python - <span className="degree">Advanced</span>
									</h3>
								</div>

								<p className="desc">
									I have been coding in Python for about 2 years. Over the period, I have finished
									several Python books and courses and built some projects including small games and
									puzzles. Here are the some of the Python libraries I am familiar with:
								</p>
								<div className="libraries">
									<ul>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={pytorch} alt="" className="library_logo" />
													<p className="degree"> Intermediate</p>
												</div>
												<div className="progress_bar_default pytorch"></div>
												<div className="progress_bar pytorch"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={pygame} alt="" className="library_logo" />
													<p className="degree"> Intermediate</p>
												</div>
												<div className="progress_bar_default pygame"></div>
												<div className="progress_bar pygame"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={numpy} alt="" className="library_logo" />
													<p className="degree"> Advanced</p>
												</div>
												<div className="progress_bar_default numpy"></div>
												<div className="progress_bar numpy"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={pandas} alt="" className="library_logo" />
													<p className="degree"> Advanced</p>
												</div>
												<div className="progress_bar_default pandas"></div>
												<div className="progress_bar pandas"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="language database">
								<div className="l_circle database"></div>
								<div className="connect"></div>
								<h3>Database</h3>
								<div className="libraries">
									<ul>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={sql} alt="" className="library_logo sql" />
													<p className="degree"> Advanced</p>
												</div>

												<div className="progress_bar_default sql"></div>
												<div className="progress_bar sql"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={mongodb} alt="" className="library_logo mongo" />
													<p className="degree"> Intermediate</p>
												</div>
												<div className="progress_bar_default mongo"></div>
												<div className="progress_bar mongo"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="language script">
								<div className="l_circle script"></div>
								<div className="connect"></div>
								<div className="libraries">
									<ul>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={html} alt="" className="library_logo html" />
													<p className="degree"> Fluent</p>
												</div>

												<div className="progress_bar_default html"></div>
												<div className="progress_bar html"></div>
											</div>
										</li>
										<li>
											<div className="skill_measure">
												<div className="library">
													<img src={scss} alt="" className="library_logo css" />
													<p className="degree"> Fluent</p>
												</div>
												<div className="progress_bar_default css"></div>
												<div className="progress_bar css"></div>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="language others">
								<div className="l_circle others"></div>
								<div className="connect"></div>
								<h3>
									Java, C, C++, Haskell - <span className="degree">Intermediate</span>
								</h3>
								<p className="desc">
									These languages are the ones I have learned quite well when I took the courses at
									KAIST. Since C++ was my first and favourite language, I am quite good at Java and
									C while I have not done any noteworthy project using Haskell.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="edu_ach">
					<div className="row_me">
						<div className="education">
							<div className="title">
								<h2>Education</h2>
							</div>
							<div className="data">
								<div className="l_circle first"></div>
								<div className="l_circle second"></div>
								<div className="connect first"></div>
								<div className="connect second"></div>
								<div className="l_circle third"></div>
								<div className="connect third"></div>
								<div className="chonnam univ">
									<div className="univ_name">
										<h2>
											<a href="https://www.jnu.ac.kr/jnumain.aspx" target="_blank" rel="noreferrer">
												Chonnam National University
											</a>
										</h2>
									</div>
									<div className="year_major">
										<p className="years">2018 - 2020</p>
										<p>|</p>
										<p className="major">Business Adminstration</p>
									</div>
								</div>
								<div className="kaist">
									<div className="univ">
										<div className="univ_name">
											<h2>
												<a href="https://www.kaist.ac.kr/kr/" target="_blank" rel="noreferrer">
													Korea Advanced Institute of Science and technology
												</a>
											</h2>
										</div>
										<div className="year_major">
											<p className="years">2020 ~ Current</p>
											<p>|</p>
											<p className="major">Computer Science</p>
										</div>
									</div>
									<div className="courses">
										<p className="title">Relevant Coursework</p>
										<ul>
											<li>
												<span className="course_code">CS101 </span> - Introduction to Programming
												using Python
											</li>
											<li>
												<span className="course_code">CoE202</span> - Basics of Artificial
												Intelligence
											</li>
											<li>
												<span className="course_code">CS206 </span> - Data Structures and Algorithms
											</li>

											<li>
												<span className="course_code">CS220 </span> - Programming Principles
											</li>
											<li>
												<span className="course_code">CS230 </span> - System Programming
											</li>
											<li>
												<span className="course_code">CS300 </span> - Introduction to Algorithms
											</li>
											<li>
												<span className="course_code">CS360 </span> - Introduction to Database
											</li>
											<li>
												<span className="course_code">CS376</span> - Machine Learning
											</li>
										</ul>
									</div>
								</div>
								<div
									className={courses ? "other_courses show " : "other_courses"}
									onClick={showOthers}
								>
									<div className="title">
										Online Courses <span className="click">(click to see)</span>
									</div>
									<div className="courses">
										<ul>
											<li>
												<div className="course">
													<a
														href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
														className="course_name"
													>
														The Complete 2021 Web Development Bootcamp
													</a>
													<div className="details">
														<p>Udemy</p>
														<p>|</p>
														<p>Angela Yu</p>
													</div>
												</div>
											</li>
											<li>
												<div className="course">
													<a
														href="https://www.coursera.org/learn/machine-learning"
														className="course_name"
													>
														Machine Learning
													</a>
													<div className="details">
														<p>Coursera</p>
														<p>|</p>
														<p>Andrew Ng</p>
													</div>
												</div>
											</li>
											<li>
												<div className="course">
													<a
														href="https://www.coursera.org/specializations/deep-learning?page=1"
														className="course_name"
													>
														Deep Learning Specialization
													</a>
													<div className="details">
														<p>Coursera</p>
														<p>|</p>
														<p>Andrew Ng</p>
													</div>
												</div>
											</li>
											<li>
												<div className="course">
													<a
														href="https://www.coursera.org/learn/server-side-nodejs/home"
														className="course_name"
													>
														Server-side Development with NodeJS, Express and MongoDB
													</a>
													<div className="details">
														<p>Coursera</p>
														<p>|</p>
														<p>The Hong Kong University of Science and Technology</p>
													</div>
												</div>
											</li>
											<li>
												<div className="course">
													<a
														href="https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript"
														className="course_name"
													>
														CS50's Web Programming with Python and JavaScript
													</a>
													<div className="details">
														<p>Edx</p>
														<p>|</p>
														<p>Harvard</p>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="achievements">
						<div className="data_container">
							<div className="title">
								<h2>Achievements</h2>
							</div>
							<div className="data">
								<div className="achievement">
									<div className="title">Republican Math Olympiad</div>
									<div className="l_circle"></div>
									<div className="connect"></div>
									<div className="details">
										<p className="date">2015</p>
										<p>|</p>
										<p className="place">3rd place</p>
									</div>
									<div className="desc"></div>
								</div>
								<div className="achievement">
									<div className="title">Regional Math Olympiad</div>
									<div className="l_circle"></div>
									<div className="connect"></div>
									<div className="details">
										<p className="date">2018</p>
										<p>|</p>
										<p className="place">2nd place</p>
									</div>
									<div className="desc"></div>
								</div>
								<div className="achievement">
									<div className="title">
										Republican Math Olympiad{" "}
										<span className="among">among Specialized Schools</span>
										<div className="l_circle"></div>
										<div className="connect"></div>
									</div>
									<div className="details">
										<p className="date">2017</p>
										<p>|</p>
										<p className="place">3rd place</p>
									</div>
									<div className="desc"></div>
								</div>
								<div className="achievement">
									<div className="title">Selection for IMO</div>
									<div className="l_circle"></div>
									<div className="connect"></div>
									<div className="details">
										<p className="date">2017</p>
										<p>|</p>
										<p className="place">6th place (Honorable Mention)</p>
									</div>
									<div className="desc"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
