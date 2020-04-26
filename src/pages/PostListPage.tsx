import React from "react";
import Layout from "../components/layout/Layout";
import SideMenuContainer from "../containers/sidemenu/SidemenuContainer";
import PostCardListContainer from "../containers/post/PostCardListContainer";

const PostListPage = () => {
  return (
    <Layout>
      <SideMenuContainer menuItem={[]} />
      <PostCardListContainer />
    </Layout>
  );
};

export default PostListPage;
