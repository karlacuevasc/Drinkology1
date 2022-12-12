import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ScriptTag from "react-script-tag";
import { Context } from "../store/appContext";
import { Container, Row, Col, Form, Jumbotron, Button } from "react-bootstrap";
import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="contactImage" fluid>
				<div className="">
					<Container className="">
						<h1 className="contactTitle">Contact Us</h1>
					</Container>
				</div>
			</div>
			<div className="contactFormBackground">
				<div className="questions">
					<p className="questionTitle">Got a question? </p>
					<p>We would love to hear from you! Send us a message and we will respond as soon as possible.</p>
				</div>
				<div className="fields">
					<Form>
						<Row>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="First name" />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="Last name" />
								</Form.Group>
							</Col>
							<Col sm={4}>
								<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
									<Form.Control type="email" placeholder="email" />
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Form>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
									<Form.Control as="textarea" rows={10} placeholder="Message" />
								</Form.Group>
							</Col>
						</Row>
					</Form>
					<Button className="contactButton" variant="dark">
						Send
					</Button>
				</div>
			</div>
		</>
	);
};
