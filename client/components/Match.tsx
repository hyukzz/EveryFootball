import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

import { matchData, matchDataType } from "../assets/matchData";
import MatchItem from "./MatchItem";
import Search from "./Search";

const Match = () => {
	const [matches, setMatches] = useState(matchData);
	const [selectDate, setSelectDate] = useState(new Date());
	const [category, setCategory] = useState("모든 요일");

	useEffect(() => {
		if (moment(selectDate).format("LL")) {
			const filteredProducts = matchData.filter(
				item => item.date === moment(selectDate).format("LL")
			);
			setMatches(filteredProducts);
		}
	}, [selectDate]);

	useEffect(() => {
		if (category === "모든 요일") {
			setMatches(matchData);
		}
		if (category === "월") {
			const filteredProducts = matchData.filter(item => item.day === "월");
			setMatches(filteredProducts);
		}
		if (category === "화") {
			const filteredProducts = matchData.filter(item => item.day === "화");

			setMatches(filteredProducts);
		}
		if (category === "수") {
			const filteredProducts = matchData.filter(item => item.day === "수");

			setMatches(filteredProducts);
		}
		if (category === "목") {
			const filteredProducts = matchData.filter(item => item.day === "목");

			setMatches(filteredProducts);
		}
		if (category === "금") {
			const filteredProducts = matchData.filter(item => item.day === "금");

			setMatches(filteredProducts);
		}
		if (category === "토") {
			const filteredProducts = matchData.filter(item => item.day === "토");

			setMatches(filteredProducts);
		}
		if (category === "일") {
			const filteredProducts = matchData.filter(item => item.day === "일");
			setMatches(filteredProducts);
		}
	}, [category]);

	return (
		<>
			<Search />
			<DatesList>
				<SwiperItems>
					<SwiperItem>
						<DatePicker
							dateFormat="yyyy/MM/dd(eee)"
							selected={selectDate}
							value={selectDate}
							minDate={new Date()}
							onChange={date => setSelectDate(date)}
							popperPlacement="auto"
							customInput={
								<FiCalendar style={{ marginRight: "7px", cursor: "pointer" }} />
							}
						/>
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "모든 요일" ? "check" : "none-check"}
						onClick={() => setCategory("모든 요일")}
					>
						모든 요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "월" ? "check" : "none-check"}
						onClick={() => setCategory("월")}
					>
						월요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "화" ? "check" : "none-check"}
						onClick={() => setCategory("화")}
					>
						화요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "수" ? "check" : "none-check"}
						onClick={() => setCategory("수")}
					>
						수요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "목" ? "check" : "none-check"}
						onClick={() => setCategory("목")}
					>
						목요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "금" ? "check" : "none-check"}
						onClick={() => setCategory("금")}
					>
						금요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "토" ? "check" : "none-check"}
						onClick={() => setCategory("토")}
					>
						토요일
					</SwiperItem>
				</SwiperItems>
				<SwiperItems>
					<SwiperItem
						className={category === "일" ? "check" : "none-check"}
						onClick={() => setCategory("일")}
					>
						일요일
					</SwiperItem>
				</SwiperItems>
			</DatesList>

			<SocialList>
				<MatchContainer>
					<Matches>
						{matches?.map((item: matchDataType) => (
							<MatchItem item={item} key={item.id} />
						))}
					</Matches>
				</MatchContainer>
			</SocialList>
		</>
	);
};
export default Match;

const SocialList = styled.div`
  display: block;
  width: 100%;
`;

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

const DatesList = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
`;

const SwiperItems = styled.div`
  margin: 0 auto;
`;

const SwiperItem = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 15px;
  user-select: none;
  &.check {
    background: #fff !important;
    color: #df2020 !important;
  }
  &.none-check {
    cursor: pointer;
  }
`;
