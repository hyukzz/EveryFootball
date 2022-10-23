import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: 150px;
`;

const Main = styled.main`
  padding: 16px;
`;

export default Layout;
