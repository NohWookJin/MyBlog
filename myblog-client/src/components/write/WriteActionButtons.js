import styled from "styled-components";
import Button from "../common/Button";
import { BsArrowLeftShort } from "react-icons/bs";

const WriteActionButtons = ({ onPublish, onCancel }) => {
  return (
    <StyledWriteActionButtons>
      <StyledButton onClick={onCancel}>
        <StyledBsArrowLeftShort />
        <span>나가기</span>
      </StyledButton>
      <StyledPublishButton onClick={onPublish}>출간하기</StyledPublishButton>
    </StyledWriteActionButtons>
  );
};

export default WriteActionButtons;

const StyledWriteActionButtons = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 1px 1px gray;
`;

const StyledButton = styled.button`
  border: none;
  font-size: 1.15rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBsArrowLeftShort = styled(BsArrowLeftShort)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-bottom: 0.05rem;
`;

const StyledPublishButton = styled(Button)`
  font-size: 1.15rem;
  padding: 0.5rem 1.15rem;
  border-radius: 6px;
`;
