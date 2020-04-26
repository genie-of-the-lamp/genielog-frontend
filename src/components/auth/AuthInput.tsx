/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Input from "../common/Input";
import { ChangeEvent } from "react";

type AuthInputProps = {
  placeholder: string;
  name: string;
  value?: string;
  type?: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
const AuthInput = ({ ...rest }: AuthInputProps) => {
  return <Input css={style} label="" hideLabel {...rest} />;
};

const style = css`
  & + & {
    margin-top: 100px;
  }
`;

export default AuthInput;
