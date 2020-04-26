import React from "react";
import Layout from "../components/layout/Layout";
import SignupFormContainer from "../containers/auth/SignupFormContainer";

const SignupPage = () => {
  return (
    <Layout headerTheme="inverse">
      <SignupFormContainer />
    </Layout>
  );
};

export default SignupPage;
