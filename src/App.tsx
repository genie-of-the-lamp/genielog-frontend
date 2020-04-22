import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/post" component={PostPage} exact />
        <Route path="/write" component={WritePage} exact />
      </Switch>

    </>
  );
}

export default App;
