/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ButtonGroup from "../common/ButtonGroup";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import AuthInput from "./AuthInput";
import Link from "../common/Link";
import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  ButtonHTMLAttributes,
} from "react";

type Error = {
  errorObject: string;
  errorMessage: string;
};

type AuthFormProps = {
  type: "signin" | "signup";
  error: Error;
  onSubmit: (
    email: string,
    username: string,
    password: string,
    passwordConfirm: string
  ) => void;
};

const AuthForm = ({ type, error, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(email, username, password, passwordConfirm);
  };
  const onChange = (setter: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => setter(e.target.value);
  };
  return (
    <div css={style}>
      <div className="auth-title">
        {type === "signin" ? "SIGN IN" : "SIGN UP"}
        {type === "signin" && <Link to="/signup">sign up here.</Link>}
      </div>
      <div>
        <form>
          <AuthInput
            placeholder="email"
            name="email"
            value={email}
            onChange={onChange(setEmail)}
            error={error.errorObject === "email"}
          />
          {type === "signup" && (
            <AuthInput
              placeholder="name"
              name="username"
              value={username}
              onChange={onChange(setUsername)}
              error={error.errorObject === "username"}
            />
          )}
          <AuthInput
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={onChange(setPassword)}
            error={error.errorObject === "password"}
          />
          {type === "signup" && (
            <AuthInput
              placeholder="confrim password"
              name="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={onChange(setPasswordConfirm)}
              error={error.errorObject === "password"}
            />
          )}
          <div className="error">{error.errorMessage}</div>
          <ButtonGroup direction="row" gap="">
            <Button theme="violet" className="submit-button" onClick={onClick}>
              {type === "signin" ? "SIGN IN" : "SIGN UP"}
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
};

AuthForm.defaultProps = {
  error: {
    errorObject: "",
    errorMessage: "",
  },
};

const style = css`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .auth-title {
    padding-bottom: 30px;
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    div {
      font-size: 0.75rem;
      margin-top: 1rem;
      display: flex;
      flex-direction: row-reverse;
    }
  }

  .error {
    margin-top: 10px;
    height: 0.825rem;
    font-size: 0.75rem;
    padding-left: 0.5rem;
    color: ${palette.red[8]};
  }

  .submit-button {
    margin-top: 30px;
    width: 100%;
  }
`;

export default AuthForm;
