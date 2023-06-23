import styled from "styled-components";
import Button from "./Button";

const AlertModal = ({
  visible,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfrim,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <StyledAlertModal>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
          <StyledButton onClick={onConfrim}>{confirmText}</StyledButton>
        </div>
      </StyledAlertModal>
    </FullScreen>
  );
};

export default AlertModal;

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAlertModal = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
