import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterInfo>
          <ul>
            <h3>
              <a href="https://github.com/kimyounlim">TEAM KIMYOUNLIM</a>
            </h3>
            <li>
              <a href="https://github.com/EuilimChoi">최의림</a>
            </li>
            <li>
              <a href="https://github.com/yomae">김여명</a>
            </li>
            <li>
              <a href="https://github.com/hyukzz">정윤혁</a>
            </li>
          </ul>

          <ul>
            <h3>
              <a href="https://github.com/kimyounlim/EveryFootball">
                EveryFootball
              </a>
            </h3>
            <li>Copyright @ KIMYOUNLIM All right Reserved</li>
          </ul>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2a2a2a;
  height: 200px;
`;

const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  overflow: auto;
`;

const FooterInfo = styled.div`
  padding: 35px;
  color: white;

  & > ul {
    width: 50%;
    float: left;
  }

  & > ul > li {
    padding-right: 10px;
    float: left;
  }

  & > ul > h3 {
    font-size: 20px;
  }
`;
