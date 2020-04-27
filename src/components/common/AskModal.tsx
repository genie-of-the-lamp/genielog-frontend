/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

type AskModalProps = {
  visible: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
};
const AskModal = ({
  visible,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: AskModalProps) => {
  if (!visible) return null;
  return (
    <div css={style}>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
        <ButtonGroup direction="row" gap="5" alignRight>
          <Button theme="violetInverse" onClick={onCancel} borderRadius="4px">
            {cancelText}
          </Button>
          <Button theme="violet" onClick={onConfirm} borderRadius="4px">
            {confirmText}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

const style = css`
  & {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div {
    width: 300px;
    background: white;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    h2 {
      margin-top: 0;
      margin-bottm: 0.825rem;
    }
    p {
      margin-bottom: 2rem;
    }
  }
`;

export default AskModal;
