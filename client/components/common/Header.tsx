import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../../states/common";

import { AiOutlineUser, AiOutlineEllipsis } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const [login, setLogin] = useRecoilState(isLoginAtom); // 로그인 여부에 따라 헤더 구성을 달라지게 하는 상태
  const router = useRouter();

  const handleUserIcon = () => {
    if (login) {
      setLogin(false);
      sessionStorage.removeItem("accessToken");
      alert("로그아웃 완료");
      // 로그인이 되있는 경우는 마이페이지로 이동, 임시로 로그아웃으로 만들어놓음
      // router.push("/mypage");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") !== null) {
      setLogin(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link href="/">
            <img src="../logo.png" />
          </Link>
        </div>
        <UserIcon>
          <AiOutlineUser onClick={handleUserIcon} />
        </UserIcon>
        <div>
          <AiOutlineEllipsis />
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  max-width: 800px;
  font-size: 40px;
  margin: 0 auto;
  .navbar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar_logo {
    flex: 1 1 auto;
  }

  .navbar_logo img {
    width: 200px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const UserIcon = styled.div`
  margin-right: 30px;
  cursor: pointer;
`;
