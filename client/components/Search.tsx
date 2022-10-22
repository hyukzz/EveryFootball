import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";
import { matchData, matchDataType } from "../assets/matchData";
import Link from "next/link";

const Search = () => {
	const [matches, setMatches] = useState(matchData);
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

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
					<div className="dataResult">
						{filteredData.slice(0, 1).map((value, i) => {
							return (
								<div key={i}>
									<Link
										href="/district/[id]"
										as={`/district/${value.category}`}
									>
										<p>{value.category} </p>
									</Link>
								</div>
							);
						})}
					</div>
				)}
			</form>

			{/* {matches?.map((item: matchDataType) => (
				<MatchItem item={item} key={item.id} />
			))} */}
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
