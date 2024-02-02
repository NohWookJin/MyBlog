import AlertModal from "../common/AlertModal";

const RemoveAlertModal = ({ visible, onConfirm, onCacnel }) => {
  return (
    <AlertModal
      visible={visible}
      title="포스트 삭제"
      description="포스트를 정말 삭제하시겠습니까?"
      onConfrimText="삭제"
      onConfrim={onConfirm}
      onCancel={onCacnel}
    />
  );
};

export default RemoveAlertModal;
