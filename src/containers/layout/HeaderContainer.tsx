import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import Header from "../../components/layout/Header";
import { signout } from "../../modules/user";

type HeaderContainerProps = {
  theme?: "default" | "inverse";
  hideUserInfo?: boolean;
};
const HeaderContainer = ({ theme, hideUserInfo }: HeaderContainerProps) => {
  const { user } = useSelector((state: RootState) => ({
    user: state.user.user,
  }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(signout());
  };

  return (
    <Header
      user={user}
      theme={theme}
      onLogout={onLogout}
      hideUserInfo={hideUserInfo}
    />
  );
};

export default HeaderContainer;
