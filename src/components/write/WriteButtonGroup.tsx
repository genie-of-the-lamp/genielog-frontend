/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonGroup from "../common/ButtonGroup";
import Button from "../common/Button";

type WriteButtonGroupProps = {
  onBack?: () => void;
  onPost?: () => void;
  modified?: boolean;
};

const WriteButtonGroup = ({
  onBack,
  onPost,
  modified,
}: WriteButtonGroupProps) => {
  return (
    <ButtonGroup
      css={style}
      direction="row"
      gap="justify-content: space-between;"
    >
      <Button theme="violetInverse" onClick={onBack}>
        BACK
      </Button>
      <Button theme="violet" onClick={onPost}>
        {modified ? "MOD" : "POST"}
      </Button>
    </ButtonGroup>
  );
};

const style = css`
  padding: 1rem;
`;

export default WriteButtonGroup;
