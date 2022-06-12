import styled from "styled-components";

const MatchLi = styled.div`
	width: 1200px;
	padding: 35px;
	border-bottom: solid 1px gainsboro;
	margin: 0 auto;
	/* transform: translateY(40%); */
`;

const MatchLink = styled.div``;

const MatchTime = styled.div`
	font-weight: 700;
	display: inline-block;
	float: left;
	font-size: 15px;
`;
const MatchInfoData = styled.div`
	/* display: inline-block; */
	text-align: center;
`;

const MatchStatus = styled.div`
	display: inline-block;
	float: right;
	border: 1px solid whitesmoke;
	width: 100px;
	height: 40px;
	border-radius: 20px;
	background-color: dodgerblue;
	color: white;
	line-height: 35px;
	text-align: center;
`;

// .closed {
//   background-color: gainsboro;
//   color: white;
// }

function MatchInfo() {
	return (
		<MatchLi>
			<MatchStatus>5명 남음</MatchStatus>
			<MatchLink>
				<MatchTime>3월 22일 17:00</MatchTime>
				<MatchInfoData>
					<h3>서울특별시 도림로 10길</h3>
					<span style={{ color: "grey" }}>남 </span>
					<span style={{ color: "grey" }}>5 vs 5</span>
				</MatchInfoData>
			</MatchLink>
		</MatchLi>
	);
}
export default MatchInfo;
