import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { matchData, matchDataType } from "../assets/matchData";
import Link from "next/link";
import MatchItem from "./MatchItem";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isKeywordAtom } from "../states/common";
import District from "../pages/district/[id]";

const Search = () => {
	const [matches, setMatches] = useState(matchData);
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useRecoilState(isKeywordAtom);

	const handleFilter = event => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);

		const newFilter = matches.filter(value => {
			return value.category.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	return (
		<>
			<form>
				<SearchContainer>
					<BiSearchAlt2
						size="24"
						style={{ marginRight: "10px", color: "black" }}
					/>
					<Input
						placeholder="지역, 구장 이름으로 찾기"
						type="text"
						value={wordEntered}
						onChange={handleFilter}
					/>
				</SearchContainer>
				{filteredData.length != 0 && (
					<DateResult>
						{filteredData.slice(0, 1).map((item, i) => {
							return (
								<div key={i}>
									<Link
										href={{
											pathname: `/district/[id]`,
											query: { wordEntered: wordEntered },
										}}
										as={`/district/${item.category}`}
									>
										<DateItem>
											<p>{item.category}</p>
										</DateItem>
									</Link>
									{/* {matches?.map((item: matchDataType) => (
										<MatchItem item={item} key={item.id} />
									))} */}
								</div>
							);
						})}
					</DateResult>
				)}
			</form>
		</>
	);
};

export default Search;

const SearchContainer = styled.div`
	width: 450px !important;
	margin: 0 auto;
	background-color: #f7f7f7;
	color: #f6f6f6;
	padding: 8px;
	border-radius: 6px;
	height: 30px;
	margin-top: 15px;
	margin-bottom: 10px;
`;

const Input = styled.input`
	color: #3e5463;
	font-size: 14px;
	background: none;
	border: none;
	vertical-align: super;
	width: calc(100% - 60px);
	padding: 0px;
	line-height: 24px;
`;

const DateResult = styled.div`
	width: 350px;
	height: 50px;
	margin-top: 5px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	overflow-y: auto;
	margin: 0 auto;
	cursor: pointer;
	&::-webkit-scrollbar {
		display: none;
	}
	&:hover {
		background-color: lightgrey;
	}
`;

const DateItem = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	color: black;
	margin-left: 10px;
	text-decoration: none;
`;
