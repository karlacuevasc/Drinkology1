import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
	const { store, actions } = useContext(Context);
	const history = useNavigate();

	const handleLogOut = () => {
		localStorage.clear();
		sessionStorage.clear();
		history.push("/login");
	};

	return <button onClick={() => handleLogOut()}> Sign out </button>;
};
