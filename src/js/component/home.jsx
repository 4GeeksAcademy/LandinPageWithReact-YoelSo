import React from "react";
import { NavBar } from "./NavBar.jsx";
import { Jumbotron } from "./Jumbotron.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;
