import React, { useState } from "react";
import "../../styles/contact/contact.css";
import profile from "../../assets/photo_2021-08-18_22.37.24-removebg.png";
import emailjs from "emailjs-com";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Bounce } from "react-reveal";

export default function Contact() {
	const [mailerState, setState] = useState({ email: "", subject: "", message: "" });
	const [success, setSuccess] = useState(null);

	function handleInput(e) {
		console.log(e.target.name);
		setState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	const submitEmail = async (e) => {
		e.preventDefault();
		console.log(process.env.REACT_APP_TEMPLATE_ID);
		emailjs
			.sendForm(
				`${process.env.REACT_APP_SERVICE_ID}`,
				`${process.env.REACT_APP_TEMPLATE_ID}`,
				e.target,
				`${process.env.REACT_APP_USER_ID}`
			)
			.then(
				(result) => {
					console.log(result.text);
					setSuccess(true);
					setState({ email: "", subject: "", message: "" });
				},
				(error) => {
					console.log(error);
					setSuccess(false);
				}
			);
	};
	return (
		<div className="contact__container">
			<Bounce left>
				<div className="title">
					<h1 className="back">Contact me</h1>
					<div className="title_up">
						<h1>Don't hesitate to contact me</h1>
					</div>
				</div>{" "}
			</Bounce>

			<div className="data">
				<Bounce left>
					<div className="my_info">
						<div className="me">
							<img src={profile} alt="" />
							<div className="name_job">
								<p className="name">Mukhammaddiyor Alijonov</p>
								<hr />
							</div>
						</div>
						<div className="address_contact">
							<div className="address">
								<div className="icon_div">
									<GoLocation className="icon location" />
								</div>

								<p>KAIST, 291 Daehak-ro, Eoeun-dong, Yuseong-gu, Daejeon, South Korea</p>
							</div>
							<div className="email">
								<div className="icon_div">
									<AiOutlineMail className="icon" />
								</div>

								<p>mukhammaddiyoralijonov@gmail.com</p>
							</div>
							<div className="tel">
								<div className="icon_div">
									<HiOutlinePhone className="icon" />
								</div>

								<p>+82 10-5187-9912</p>
							</div>
						</div>
					</div>
				</Bounce>

				<Bounce right>
					<form className="contact_message" method="POST" onSubmit={submitEmail}>
						<input
							onChange={handleInput}
							type="email"
							name="email"
							className="email_address"
							placeholder="Email Address*"
							value={mailerState.email}
							required
						/>
						<input
							onChange={handleInput}
							type="text"
							name="subject"
							className="subject"
							placeholder="Subject*"
							value={mailerState.subject}
							required
						/>
						<textarea
							onChange={handleInput}
							name="message"
							cols="30"
							value={mailerState.message}
							rows="6"
							placeholder="Your message*"
						></textarea>
						<button type="submit">Send</button>
						<span
							style={
								success !== null
									? success
										? { color: "green" }
										: { display: "none" }
									: { display: "none" }
							}
						>
							Sent successfully!
						</span>
						<span
							style={
								success !== null
									? success
										? { display: "none" }
										: { color: "red" }
									: { display: "none" }
							}
						>
							Could not send the message.
						</span>
					</form>
				</Bounce>
			</div>
		</div>
	);
}
