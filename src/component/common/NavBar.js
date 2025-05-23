import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Add this line for styling

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
			<div className="container">
				<Link className="navbar-brand me-auto" to="/">
					Student Management System
				</Link>
				<div className="d-flex">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/view-students">
								View All Student
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/add-students">
								Add New Student
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
