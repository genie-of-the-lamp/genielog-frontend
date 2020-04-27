import React from "react";
import { Route, Switch } from "react-router-dom";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import PostListPage from "./pages/PostListPage";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <>
      <Helmet>
        <title>genielog</title>
      </Helmet>
      <Switch>
        <Route path="/" component={PostListPage} exact />
        <Route path="/write" component={WritePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signin" component={SigninPage} />
        <Route component={PostPage} path="/post/:postId" />
      </Switch>
    </>
  );
}

export default App;
