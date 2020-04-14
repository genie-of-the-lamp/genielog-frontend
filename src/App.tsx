import React from 'react';
import Sidemenu from './components/sidemenu/Sidemenu';
import PostViewerContainer from './containers/post/PostViewerContainer';
import Layout from './components/layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import PostPage from './components/page/PostPage';


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/post" component={PostPage} exact />
      </Switch>

    </>
  );
}

export default App;
