import AuthForm from "../../components/auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import React, { useEffect, useState, useCallback } from "react";
import { signup } from "../../modules/auth";
import { useHistory } from "react-router-dom";

const SignupFormContainer = () => {
  const { error, auth } = useSelector((state: RootState) => ({
    auth: state.auth.auth,
    error: state.auth.error,
  }));
  const [formError, setFormError] = useState({
    errorObject: "",
    errorMessage: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = useCallback(
    (
      email: string,
      username: string,
      password: string,
      passwordConfirm: string
    ) => {
      if (password !== passwordConfirm) {
        setFormError({
          errorObject: "password",
          errorMessage: "비밀번호가 일치하지 않습니다.",
        });
        return;
      }
      const payload = { email, username, password };
      dispatch(signup.request(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    if (error) {
      var errorObject = "";
      var errorMessage = "회원가입에 실패했습니다.";
      if (error.response && error.response.status === 400) {
        errorObject = "email";
        errorMessage = "형식에 맞지 않는 이메일 주소 입니다.";
      }
      if (error.response && error.response.status === 409) {
        errorObject = "email";
        errorMessage = "이미 존재하는 이메일 주소 입니다.";
      }
      setFormError({ errorObject: errorObject, errorMessage: errorMessage });
      return;
    }
    if (auth) {
      history.push("/signin");
    }
  }, [auth, error, history, dispatch]);

  return <AuthForm type="signup" onSubmit={onSubmit} error={formError} />;
};

export default SignupFormContainer;
