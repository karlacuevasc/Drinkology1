import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Jumbotron} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/jumbotron.css";

export const Banner = () => {
	return (
		<div>
		<div className="jumbotron">
			<Container>
				<h1 className="jumboTitle">Introducing a New Way to Access your Favorite Cocktail Recipes.</h1>
			</Container>
		</div>
		</div>
		

	);
};
