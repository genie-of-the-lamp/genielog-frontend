/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon, { IconType } from "./Icon";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  theme: "default" | "line" | "round";
  label: string;
  hideLabel?: boolean;
  icon?: IconType;
  width?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  direction: "row" | "column";
}

const Input = ({
  theme,
  label,
  hideLabel,
  icon,
  width,
  onChange,
  error,
  direction,
  ...rest
}: InputProps) => {
  return (
    <div css={[wrapperStyle]}>
      <div css={[flexAlign(direction)]}>
        {!hideLabel && (
          <div css={[labelStyle]}>
            <label
              css={[
                padding(theme),
                direction === "column" && { paddingBottom: "0.25rem" },
              ]}
            >
              {label}
            </label>
          </div>
        )}
        <div
          css={[
            inputStyle,
            { width },
            error && inputErrorStyle(theme),
            icon && iconStyle(),
          ]}
        >
          {icon && <Icon icon={icon} />}
          <input
            css={[padding(theme), themes[theme]]}
            onChange={onChange}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

Input.defaultProps = {
  width: "100%",
  theme: "default",
  hideLabel: false,
  direction: "row",
};

const inputErrorStyle = (theme: "default" | "line" | "round") => {
  if (theme === "default") {
    return css`
      input,
      input:focus {
        color: red;
        border: 1px solid red;
      }
    `;
  }
  return css`
    input,
    input:focus {
      color: red;
      border-color: red;
    }
  `;
};

const iconStyle = () => css`
  svg {
    position: absolute;
    top: 50%;
    height: 1em;
    width: 1em;
    font-size: 0.75em;
    margin-top: -0.5em;
    z-index: 1;
    left: 0.7rem;
  }

  input {
    padding-left: 2rem;
  }
`;

const flexAlign = (direction: "row" | "column") => {
  return css`
    display: flex;
    flex-direction: ${direction};
  `;
};

const wrapperStyle = css`
  & + & {
    margin-top: 0.5rem;
  }
`;

const labelStyle = css`
  display: inline-flex;
  label {
    font-size: 0.85rem;
    font-weight: 600;
    width: max-content;
  }
`;

const inputStyle = css`
  display: inline-block;
  position: relative;
  vertical-align: top;
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-size: 0.85rem;
    line-height: 1.25rem;
  }
`;

const padding = (theme: "default" | "line" | "round") => {
  if (theme === "round") {
    return css`
      padding: 0.25em 1em;
    `;
  }
  return css`
    padding: 0.715em 1em;
  `;
};

const themes = {
  line: css`
    border: none;
    border-bottom: 1px solid #ced4da;
    &:focus {
      outline: none;
      border-color: #b197fc;
    }
  `,
  default: css`
    border: 1px solid #ced4da;
    &:focus {
        border: 1px solid #b197fc;
        outline: none;
  `,
  round: css`
    border-radius: 9999em;
    border: 1px solid #ced4da;
    &:focus {
        outline: none;
        border-color: #b197fc;
  `,
};

export default Input;
