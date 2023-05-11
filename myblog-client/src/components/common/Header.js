import styled from "styled-components";
import Button from "./Button";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";
import profile from "../images/defaultProfile.png";
import LoginModal from "./LoginModal";
import { useState } from "react";
import velog from "../images/velog.png";

const Header = ({ user, onLogout }) => {
  const [modal, setModal] = useState(false);

  const profileClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <LogoWrapper>
              <MainImg src={velog} alt="main-logo" />
              <StyledSpan>Velog</StyledSpan>
            </LogoWrapper>
          </Link>
          {user ? (
            <div className="right">
              <StyledImg src={profile} alt="profile" onClick={profileClick} />
              {modal && <LoginModal onLogout={onLogout} />}
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: #f8f9fa;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    position: relative;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MainImg = styled.img`
  width: 30px;
  cursor: pointer;
  margin-right: 0.75rem;
`;

const StyledSpan = styled.span`
  font-size: 0.95rem;
`;

const StyledImg = styled.img`
  width: 40px;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 4rem;
`;
