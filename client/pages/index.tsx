import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import MatchInfo from "../components/matchInfo";

function Home() {
	return (
		<div>
			<div>
				<Header />
				<Carousel />
				<MatchInfo />
				<Footer />
			</div>
		</div>
	);
}
export default Home;
