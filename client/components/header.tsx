import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
	color: white;
	font-size: 40px;
	margin: 0 auto;
	.navbar {
		height: 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #3e3e3e;
		padding: 9px 12px;
		min-width: 564px;

		@media only screen and (max-width: 804px) {
			.navlist {
				margin: 15px 20px;
			}
		}

		@media only screen and (max-width: 725px) {
			.navlist {
				margin: 15px 15px;
			}
		}

		@media only screen and (max-width: 684px) {
			.navlist {
				margin: 15px 10px;
			}
		}

		@media only screen and (max-width: 642px) {
			.navlist {
				margin: 15px 5px;
			}
		}

		@media only screen and (max-width: 602px) {
			.navlist {
				margin: 15px 0px;
			}
		}
	}

	.navbar_logo {
		flex: 1 1 auto;
	}

	.navbar_logo img {
		width: 200px;
	}

	.navbar_menu {
		display: flex;
		list-style: none;
		font-size: 20px;
		margin: 0px;
	}

	.navbar_menu li {
		padding: 9px 12px;
		margin: 15px 30px;
		cursor: pointer;
		text-decoration: none;
	}

	.navbar_menu li:hover {
		background-color: #d49466;
		border-radius: 4px;
	}

	.navbar_menu li > div {
		color: white;
	}

	.navbar_link {
		text-decoration: none;
		color: #533026;
	}

	.navbar_icons {
		list-style: none;
		color: #533026;
		display: flex;
		margin-right: 20px;
	}

	.navbar_icons li {
		padding: 8px 12px;
	}
	.navbar_icons li:hover {
		background-color: #d49466;
		border-radius: 4px;
	}
	.navbar_toggleBtn {
		position: absolute;
		right: 32px;
		width: 23px;
		display: none;
	}
	.person_circle {
		font-size: 30px;
	}
	.navbar_icons > li {
		cursor: pointer;
	}
`;

function Header() {
	return (
		<HeaderContainer>
			<nav className="navbar">
				<div className="navbar_logo">
					<Link href="/" style={{ textDecoration: "none" }}>
						<img
							src="https://github.com/codestates/everyfootball/blob/main/client/src/Components/Mainpage/logo.png?raw=true"
							style={{ width: 250, height: 100, objectFit: "cover" }}
						/>
					</Link>
				</div>
				<ul className="navbar_menu">
					<li className="navlist">
						<Link href="/signup">
							<div>회원가입</div>
						</Link>
					</li>
					<li className="navlist">
						<Link href="/login">
							<div>로그인</div>
						</Link>
					</li>
					<li className="navlist">
						<Link href="/mypage" className="navbar_link">
							<div>마이페이지</div>
						</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
}

export default Header;
