import React, { useState, useLayoutEffect } from "react";
import "../../styles/navbar/navbar.css";
import m_icon from "../../assets/m_icon-removebg-preview.png";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTelegram } from "react-icons/fa";

export default function Navbar() {
	const [stick, setStick] = useState(false);
	const [scrollH, setScrollH] = useState(0);
	const [open, setOpen] = useState(false);

	function handleMenu(e) {
		setOpen(!open);
	}

	useLayoutEffect(() => {
		window.addEventListener("scroll", (e) => {
			const offsetY = window.scrollY;
			if (offsetY < scrollH) {
				setStick(true);
				setScrollH(offsetY);
				if (offsetY < 80) {
					setStick(false);
				}
			} else {
				setScrollH(offsetY);
				setStick(false);
			}
		});

		window.addEventListener("click", (e) => {
			const target = e.target.className;
			if (
				target === "drop_menu down" ||
				target === "nav_main" ||
				target === "burger" ||
				target === "menu-btn open" ||
				target === "menu-btn"
			) {
				console.log(target);
			} else {
				if (open) setOpen(false);
			}
		});

		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("resize", (e) => {
			if (open && window.innerWidth > 768) {
				setOpen(false);
			}
		});
	}, [open, scrollH]);

	return (
		<>
			<div className={stick ? "navbar__container stick" : "navbar__container"}>
				<div className="nav_main">
					<div className="nav_logo">
						<img src={m_icon} alt="" className="m_icon" />
					</div>
					{/* <div className="nav_items"> */}
					<div className="nav_links">
						<a href="/" className="link home">
							Home
						</a>
						<a href="/" className="link resume">
							Resume
						</a>
						<a href="/" className="link projects">
							Projects
						</a>
						<a href="/" className="link skills">
							Blogs
						</a>
						<a href="/" className="link contact">
							Contact
						</a>
					</div>
					<div className="nav_icons">
						<FaLinkedinIn className="icon linkedin" />
						<FaGithub className="icon github" />
						<FaFacebookF className="icon  facebook" />
						<FaTelegram className="icon telegram" />
						<div className={open ? "menu-btn open" : "menu-btn"} onClick={handleMenu}>
							<div className="burger"></div>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className={open ? "drop_menu down" : "drop_menu"}>
				<a href="/" className="link home">
					Home
				</a>
				<a href="/" className="link resume">
					Resume
				</a>
				<a href="/" className="link projects">
					Projects
				</a>
				<a href="/" className="link skills">
					Skills
				</a>
				<a href="/" className="link contact">
					Contact
				</a>
			</div>
		</>
	);
}
