import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { matchData, matchDataType } from "../../../assets/matchData";
import MatchItem from "../../../components/MatchItem";
import { isKeywordAtom } from "../../../states/common";
import { useRouter } from "next/router";

const District = () => {
	const router = useRouter();
	const [matches, setMatches] = useState(matchData);
	const { wordEntered } = router.query;

	const preventClose = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = "";
		router.push("/");
	};

	useEffect(() => {
		if (wordEntered === "서울") {
			window.addEventListener("beforeunload", preventClose);
			const filteredProducts = matchData.filter(
				item => item.category === "서울"
			);
			setMatches(filteredProducts);
		}
		if (wordEntered === "경기") {
			const filteredProducts = matchData.filter(
				item => item.category === "경기"
			);
			setMatches(filteredProducts);
		}
	}, [wordEntered]);

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
