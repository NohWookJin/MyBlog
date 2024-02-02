import styled from "styled-components";
import palette from "../../lib/palette";

const LoginModal = ({ onLogout }) => {
  return (
    <StyledSelect>
      <StyledText>내 벨로그</StyledText>
      <StyledText>임시 글</StyledText>
      <StyledText>읽기 목록</StyledText>
      <StyledText>설정</StyledText>
      <StyledText onClick={onLogout}>로그아웃</StyledText>
    </StyledSelect>
  );
};

export default LoginModal;

const StyledSelect = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 0rem;
  display: flex;
  flex-direction: column;
  width: 145px;
  background: #ffffff;
  border: 0.1px solid ${palette.gray[2]};
`;

const StyledText = styled.div`
  padding: 0.65rem 0.65rem;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: ${palette.teal[4]};
    background: ${palette.gray[1]};
  }
`;
