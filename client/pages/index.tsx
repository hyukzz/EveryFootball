import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Match from "../components/Match";

function Home() {
	return (
		<div>
			<div>
				<Header />
				<Carousel />
				<Match />
				<Footer />
			</div>
		</div>
	);
}
export default Home;
