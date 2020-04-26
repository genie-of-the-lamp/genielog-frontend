import React from "react";
import Layout from "../components/layout/Layout";
import SigninFormContainer from "../containers/auth/SigninFormContainer";

const SigninPage = () => {
  return (
    <Layout headerTheme="inverse">
      <SigninFormContainer />
    </Layout>
  );
};

export default SigninPage;
