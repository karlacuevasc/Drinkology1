import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SignOut } from "./signout";
import "../../styles/navbar.css";

export const NavBar = () => {
	const { store } = useContext(Context);
	const history = useNavigate();

	const handleLogOut = () => {
		localStorage.clear();
		history.push("/");
		location.reload();
	};

	return (
		<Navbar variant="light" bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">
					<i className="fas fa-cocktail" />
				</Navbar.Brand>

				<Nav className="justify-content-center" activeKey="/home">
					{!store.activeUser ? (
						<>
							<Nav.Item className="loginTab pr-3">
								<Nav.Link href="/login">Log In</Nav.Link>
							</Nav.Item>

							<Nav.Item className="signupTab pr-3">
								<Nav.Link href="/signup">Sign Up</Nav.Link>
							</Nav.Item>

							<Nav.Item className="aboutTab pr-3">
								<Nav.Link href="/about">About</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="contactTab pl-0" href="/contact">
									Contact
								</Nav.Link>
							</Nav.Item>
						</>
					) : (
						<>
							<Nav.Item>
								<Nav.Link href="/profile">Profile</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link className="aboutTab pr-3" href="/about">
									About
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link className="contactTab pl-0" href="/contact">
									Contact
								</Nav.Link>
							</Nav.Item>

							<Nav.Item>
								<Nav.Link onClick={() => handleLogOut()}>Sign Out</Nav.Link>
							</Nav.Item>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};
