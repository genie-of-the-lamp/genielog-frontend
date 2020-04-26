import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import Header from "../../components/layout/Header";
import { signout } from "../../modules/user";

type HeaderContainerProps = {
  theme?: "default" | "inverse";
};
const HeaderContainer = ({ theme }: HeaderContainerProps) => {
  const { user } = useSelector((state: RootState) => ({
    user: state.user.user,
  }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(signout());
  };

  return <Header user={user} theme={theme} onLogout={onLogout} />;
};

export default HeaderContainer;
