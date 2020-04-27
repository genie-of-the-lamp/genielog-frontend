import React from "react";
import Layout from "../components/layout/Layout";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <Layout>
      {/* <SidemenuContainer menuItem={menu} /> */}
      <PostViewerContainer />
    </Layout>
  );
};

export default PostPage;
