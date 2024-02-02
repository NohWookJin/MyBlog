import styled from "styled-components";
import palette from "../../lib/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ error, type, form, onSubmit, onChange }) => {
  const text = textMap[type];
  return (
    <StyledAuthForm>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          placeholder="아이디를 입력하세요"
          name="username"
          autoComplete="username"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          placeholder="비밀번호를 입력하세요"
          name="password"
          type="password"
          autoComplete="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            placeholder="비밀번호를 확인해주세요"
            name="passwordConfirm"
            type="password"
            autoComplete="new-password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error ? (
          <StyledBtn>
            <StyledButton>{text}</StyledButton>
            <ErrorMessage>{error}</ErrorMessage>
          </StyledBtn>
        ) : (
          <StyledButton>{text}</StyledButton>
        )}
      </form>
      <StyledFooter>
        {type === "login" ? (
          <>
            <span>아직 회원이 아니신가요? </span>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <>
            <span>회원이신가요? </span>
            <Link to="/login">로그인</Link>
          </>
        )}
      </StyledFooter>
    </StyledAuthForm>
  );
};

export default AuthForm;

const StyledAuthForm = styled.div`
  position: relative;
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[2]};
  padding: 0.5rem 0.5rem;
  outline: none;
  width: 86%;
  &:focus {
    color: $oc-teal-7;
    border: 1px solid ${palette.teal[2]};
  }
  &::placeholder {
    font-size: 0.75rem;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;

const StyledBtn = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled(Button)`
  margin-top: 1rem;
  margin-right: 0.5rem;
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 0.8rem;
  text-align: right;
  a {
    color: ${palette.teal[6]};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: left;
  font-size: 0.75rem;
  margin-top: 1rem;
`;
