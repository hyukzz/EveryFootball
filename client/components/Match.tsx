import React, { useState } from "react";
import styled from "styled-components";

import matchData from "../assets/matchData";
import MatchItem from "./MatchItem";

function Match() {
	const [matches, setMatches] = useState(matchData);

	return (
		<>
			<MatchContainer>
				<Matches>
					{matches?.map((item: matchDataProps) => (
						<MatchItem item={item} key={item.id} />
					))}
				</Matches>
			</MatchContainer>
		</>
	);
}

export default Match;

const MatchContainer = styled.div`
	display: block;
	box-sizing: border-box;
	padding: 0 16px;
	margin: 0 auto;
	max-width: 900px;
`;

const Matches = styled.div`
	display: block;
	color: #fff;
`;
