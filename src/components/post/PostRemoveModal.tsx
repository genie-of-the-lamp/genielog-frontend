import React from "react";
import AskModal from "../common/AskModal";

type PostRemoveModalProps = {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const PostRemoveModal = ({
  visible,
  onConfirm,
  onCancel,
}: PostRemoveModalProps) => {
  return (
    <AskModal
      visible={visible}
      confirmText="확인"
      onConfirm={onConfirm}
      cancelText="취소"
      onCancel={onCancel}
      title="포스트 삭제"
      message="포스트를 삭제하시겠습니까?"
    />
  );
};

export default PostRemoveModal;
