import { FormEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackIcon from "../components/common/BackIcon";
import useInput from "../hooks/useInput";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../states/common";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const { value: id, valueChangeHandler: setId } = useInput();
  const { value: password, valueChangeHandler: setPassword } = useInput();

  const login = useSetRecoilState(isLoginAtom);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login(true);
    sessionStorage.setItem("accessToken", "aaa");
    router.push("/");
  };

  return (
    <LoginContainer>
      <Header>
        <BackIcon onClick={() => router.push("/")} />
      </Header>

      <LoginForm onSubmit={handleSubmit}>
        <Title>로그인</Title>
        <Input onChange={setId} value={id} placeholder="아이디를 입력하세요" />
        <Input
          type="password"
          onChange={setPassword}
          value={password}
          placeholder="비밀번호를 입력하세요"
        />
        <SubmitButton type="submit" value="입장하기" />
        <GoSignUp>
          <Link href="/signup">회원가입은 이곳을 클릭!</Link>
        </GoSignUp>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 60px;
`;

const Header = styled.header`
  padding: 16px 0 16px 16px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 24px 0 24px;
`;

const Title = styled.span`
  margin-bottom: 56px;
  color: black;
  font-weight: 700;
  font-size: 1.4rem;
`;

const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #dce3e8;
  background-color: #fafafa;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  padding: 0 10px;

  font-size: 0.9rem;
  color: #4d4d4d;
  &::placeholder {
    color: #6b72804f;
  }
  &:nth-last-of-type(2) {
    margin-bottom: 50px;
  }
`;

const SubmitButton = styled.input`
  padding-top: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 20px;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #ec6863;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
`;

const GoSignUp = styled.div`
  margin: 0 auto;
  font-size: 0.875rem;
`;
