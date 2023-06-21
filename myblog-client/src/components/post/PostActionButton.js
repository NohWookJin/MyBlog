import styled from "styled-components";

const StyledPostActionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;
const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: white;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButton = ({ onEdit }) => {
  return (
    <StyledPostActionButton>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </StyledPostActionButton>
  );
};

export default PostActionButton;
