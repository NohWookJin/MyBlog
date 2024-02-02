import styled from "styled-components";
import Button from "./Button";
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
              {user ? (
                <StyledSpan>{user.username}</StyledSpan>
              ) : (
                <StyledSpan>Velog</StyledSpan>
              )}
            </LogoWrapper>
          </Link>
          {user ? (
            <div className="right">
              <Link to="/write">
                <button className="writeButton">새 글 작성</button>
              </Link>
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

const Wrapper = styled.div`
  padding: 0 10rem;
  height: 4rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
    position: relative;
    .writeButton {
      border: 1px solid black;
      border-radius: 20px;
      padding: 0.45rem 1.15rem;
      background: #f8f9fa;
      margin-right: 1rem;
      margin-top: 0.2rem;
      font-weight: bold;
      font-size: 0.85rem;
    }
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
  font-size: 1.15rem;
`;

const StyledImg = styled.img`
  width: 50px;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 4rem;
`;
