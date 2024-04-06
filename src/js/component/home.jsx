import React from "react";
import { NavBar } from "./NavBar.js";
import { Jumbotron } from "./Jumbotron.js"
import Card from "./Card.js";
import Footer from "./Footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let cardData = [{title: "Card Title", description: "lorem ipsum", imgURL: "https://placehold.co/500x325"}, {title: "Card New title", description: "Ipsum lorem", imgURL: "https://placehold.co/500x325"}, {title: "Card New title 3", description: "Ipsum lorem", imgURL: "https://placehold.co/500x325"}, {title: "Card New title 4", description: "Ipsum lorem", imgURL: "https://placehold.co/500x325"}]

	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row">
				{cardData.map((singleCardData)=> {
					return(
							<Card title={singleCardData.title} description={singleCardData.description} imgUrl={singleCardData.imgURL}/>
					)
				})}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
