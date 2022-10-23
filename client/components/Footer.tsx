import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const FooterContainer = styled.footer`
	margin: 0 auto;
	max-width: 900px;
	display: flex;
	border: 1px solid black;
	background-color: #3e3e3e;
	color: white;

	.footer_info {
		list-style-type: none;
		flex: 1 1 auto;
		margin-left: 200px;
		text-decoration: none;

		@media only screen and (max-width: 1200px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 50px;
		}

		@media only screen and (max-width: 1044px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 0px;
		}

		@media only screen and (max-width: 701px) {
			list-style-type: none;
			flex: 1 1 auto;
			text-decoration: none;
			margin-left: 0px;
			padding-left: 0px;
		}
	}

	.footer_info > li div {
		width: 200px;
		height: 100px;
		font-size: 40px;

		color: white;
	}

	.footer_github {
		flex: 1 1 auto;
		margin-left: 200px;

		@media only screen and (max-width: 1002px) {
			margin-left: 100px;
		}

		@media only screen and (max-width: 894px) {
			margin-left: 50px;
		}

		@media only screen and (max-width: 843px) {
			margin-left: 0px;
		}
	}

	.footer_github > ul {
		list-style-type: none;
		font-size: 25px;
	}

	.footer_github_members {
		display: flex;
	}

	.footer_github_members > div {
		padding: 3px 5px;
		margin: 5px 10px;
	}

	.github_icons {
		font-size: 50px;
		color: white;
	}
	.currentColor {
		font-size: 25px;
	}

	.footer_github_members_name {
		height: 50px;
		line-height: 50px;
	}

	.footer_github_members_name > a {
		text-decoration: none;
		color: white;
	}

	#github_title {
		margin: 10px;
	}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<ul className="footer_info">
				<li>
					<Link href="/" style={{ textDecoration: "none" }}>
						<img
							src="https://github.com/codestates/everyfootball/blob/main/client/src/Components/Mainpage/logo.png?raw=true"
							style={{ width: 250, height: 100, objectFit: "cover" }}
						/>
					</Link>
				</li>
				<li>Copyright @ 2022 All right Reserved</li>
			</ul>
			<div className="footer_github">
				<ul>
					<li id="github_title">TEAM MEMBERS</li>
					<li className="footer_github_members">
						<div>
							<div
								onClick={() =>
									window.open("https://github.com/kimyounlim/EveryFootball")
								}
							>
								<BsGithub
									className="github_icons"
									style={{ cursor: "pointer" }}
								/>
							</div>
						</div>
						<div className="footer_github_members_name">
							<div
								onClick={() => window.open("https://github.com/EuilimChoi")}
								style={{ cursor: "pointer" }}
							>
								최의림
							</div>
						</div>
						<div className="footer_github_members_name">
							<div
								onClick={() => window.open("https://github.com/yomae")}
								style={{ cursor: "pointer" }}
							>
								김여명
							</div>
						</div>
						<div className="footer_github_members_name">
							<div
								onClick={() => window.open("https://github.com/hyukzz")}
								style={{ cursor: "pointer" }}
							>
								정윤혁
							</div>
						</div>
					</li>
				</ul>
			</div>
		</FooterContainer>
	);
};

export default Footer;
