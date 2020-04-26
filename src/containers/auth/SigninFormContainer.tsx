import AuthForm from "../../components/auth/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import React, { useEffect, useState, useCallback } from "react";
import { signin } from "../../modules/auth";
import { useHistory } from "react-router-dom";
import { check } from "../../modules/user";

const SigninFormContainer = () => {
  const { authError, auth, user, userError } = useSelector(
    (state: RootState) => ({
      auth: state.auth.auth,
      authError: state.auth.error,
      user: state.user.user,
      userError: state.user.error,
    })
  );
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
      const payload = { email, password };
      dispatch(signin.request(payload));
    },
    [dispatch]
  );

  useEffect(() => {
    if (authError) {
      var errorObject = "";
      var errorMessage = "로그인에 실패했습니다.";
      if (authError.response && authError.response.status === 400) {
        errorObject = "";
        errorMessage = "이메일과 비밀번호를 입력해주세요.";
      }
      if (authError.response && authError.response.status === 401) {
        errorObject = authError.response.data;
        errorMessage = "이메일 혹은 비밀번호가 일치하지 않습니다.";
      }
      setFormError({ errorObject: errorObject, errorMessage: errorMessage });
      return;
    }
    if (auth) {
      dispatch(check.request());
    }
  }, [auth, authError, history, dispatch]);

  useEffect(() => {
    if (userError) {
      console.log(userError);
    }
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.error("localStorage isn't working.");
      }
    }
  }, [user, userError, history]);

  return <AuthForm type="signin" onSubmit={onSubmit} error={formError} />;
};

export default SigninFormContainer;
