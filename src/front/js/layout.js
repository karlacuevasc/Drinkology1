import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { Account } from "./pages/profile";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Aboutus } from "./pages/AboutUs";
import { Library } from "./pages/library";
import { SignOut } from "./component/signout";
import { CocktailsInfo } from "./pages/cocktails";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";
import { MyCocktailsInfo } from "./pages/mycocktails";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Routes>
						<Route exact path="/" element={<Home/>}>
						</Route>
						<Route exact path="/cocktails/:cocktailId" element={<CocktailsInfo/>}>
						</Route>
						<Route exact path="/signup" element={<Signup/>}>
						</Route>
						<Route exact path="/library" element={<Library/>}>
						</Route>
						<Route exact path="/login" element={<Login/>}>
						</Route>
						<Route exact path="/about" element={<Aboutus/>}>
						</Route>
						<Route excat path="/contact" element={<Contact/>}>
						</Route>
						<Route excat path="/profile" element={<Account/>}>
						</Route>
						<Route excat path="/mycocktails/:cocktailId" element={<MyCocktailsInfo/>}>
						</Route>
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
