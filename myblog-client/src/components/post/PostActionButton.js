import styled from "styled-components";
import RemoveAlertModal from "./RemoveAlertModal";
import { useState, useCallback } from "react";

const PostActionButton = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => {
    setModal(true);
  };

  const onCacnel = () => {
    setModal(false);
  };

  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <StyledPostActionButton>
        <ActionButton onClick={onEdit}>수정</ActionButton>
        <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      </StyledPostActionButton>
      <RemoveAlertModal
        visible={modal}
        onConfirm={onConfirm}
        onCacnel={onCacnel}
      />
    </>
  );
};

export default PostActionButton;

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
