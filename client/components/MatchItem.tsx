import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

function MatchItem({ item }) {
	const router = useRouter();

	const { id, title, time, gender, level, category, people, propose } = item;

	return (
		<MatchItemContainer onClick={() => router.push("/details")}>
			<LeftSection>
				<Time>{time}</Time>
			</LeftSection>
			<MiddleSection>
				<Title>{title}</Title>
				<Tags>
					<Tag>{people}</Tag>
					<Tag className="anotherTag">{gender}</Tag>
					<Tag className="anotherTag">{level}</Tag>
					<Tag className="anotherTag">{category}</Tag>
				</Tags>
			</MiddleSection>
			<RightSection>
				<ProposeButton
					style={{
						backgroundColor: propose === true ? "#0091ff" : "grey",
					}}
				>
					<ProposeStatus>
						{propose === true ? "신청가능" : "신청 마감"}
					</ProposeStatus>
				</ProposeButton>
			</RightSection>
		</MatchItemContainer>
	);
}

export default MatchItem;

const MatchItemContainer = styled.div`
	text-decoration: none;
	display: flex;
	padding: 16px 0;
	cursor: pointer;
	border-top: 1px solid grey;
	&:first-child {
		border-top: white;
	}
`;

const LeftSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 54px;
	margin-right: 10px;
`;

const Time = styled.div`
	font-family: NotoSansKR, sans-serif;
	color: black;
	font-size: 15px;
	font-weight: 600;
	line-height: 1em;
	user-select: none;
`;

const MiddleSection = styled.div`
	flex: 4;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Title = styled.div`
	position: relative;
	font-family: NotoSansKR, sans-serif;
	color: black;
	font-size: 16px;
	font-weight: 500;
	line-height: 1.5em;
	margin-top: -4px;
`;

const Tags = styled.div`
	margin-top: 8px;
	display: flex;
	user-select: none;
`;

const Tag = styled.div`
	display: inline-flex;
	-webkit-box-align: center;
	align-items: center;
	font-family: NotoSansKR, sans-serif;
	color: black;
	font-size: 11px;
	font-weight: 400;
	line-height: 1em;
	letter-spacing: -0.025em;

	&.anotherTag {
		margin-left: 8px;
	}

	&::before {
		content: "";
		width: 4px;
		height: 4px;
		background-color: #f1c331;
		border-radius: 50%;
		margin-right: 3px;
		transform: translateY(-6%);
	}
`;

const RightSection = styled.div`
	display: flex;
	align-items: center;
	flex: 1.4;
	justify-content: flex-end;
	margin-left: 8px;
`;

const ProposeButton = styled.div`
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;
	width: 100%;
	height: 42px;
	display: flex;
	align-items: center;
	background-color: grey;
	user-select: none;
`;

const ProposeStatus = styled.div`
	font-family: NotoSansKR, sans-serif;
	color: #fff;
	font-size: 12px;
	font-weight: 600;
	line-height: 1em;
	white-space: nowrap;
	text-align: center;
	transform: translateY(6%);
`;
