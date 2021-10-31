import React from "react";
import "../../styles/contact/contact.css";
import profile from "../../assets/photo_2021-08-18_22.37.24-removebg.png";

export default function Contact() {
	return (
		<div className="contact__container">
			<div className="title">
				<h1 className="back">Contact me</h1>
				<div className="title_up">
					<h1>Don't hesitate to contact me</h1>
				</div>
			</div>
			<div className="data">
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
							KAIST, 291 Daehak-ro, Eoeun-dong, Yuseong-gu, Daejeon, South Korea
						</div>
						<div className="email">
							<p>mukhammaddiyoralijonov@gmail.com</p>
							<p>alijonov@kaist.ac.kr</p>
						</div>
						<div className="tel">+82 10-5187-9912</div>
					</div>
				</div>
				<form
					className="contact_message"
					action="https://formsubmit.co/mukhammaddiyoralijonov@gmail.com"
					method="POST"
					enctype="multipart/form-data"
				>
					<input type="email" className="email_address" placeholder="Email Address*" required />
					<input type="text" className="subject" placeholder="Subject*" required />
					<textarea name="message" cols="30" rows="6" placeholder="Your message*"></textarea>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
