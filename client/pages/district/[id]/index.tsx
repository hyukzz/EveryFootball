import React, { useState, useEffect } from "react";
import { matchData, matchDataType } from "../../../assets/matchData";
import MatchItem from "../../../components/MatchItem";

const District = () => {
	const [matches, setMatches] = useState(matchData);
	useEffect(() => {
		if ("서울") {
			const filteredProducts = matchData.filter(
				item => item.category === "서울"
			);
			setMatches(filteredProducts);
		}
		if ("경기") {
			const filteredProducts = matchData.filter(
				item => item.category === "경기"
			);
			setMatches(filteredProducts);
		}
	}, []);

	return (
		<>
			<div>
				{matches?.map((item: matchDataType) => (
					<MatchItem item={item} key={item.id} />
				))}
			</div>
		</>
	);
};

export default District;
