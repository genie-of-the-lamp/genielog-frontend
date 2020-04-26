import React from "react";
import Layout from "../components/layout/Layout";
import { menuItem } from "../components/sidemenu/Sidemenu";
import SidemenuContainer from "../containers/sidemenu/SidemenuContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <Layout>
      {/* <SidemenuContainer menuItem={menu} /> */}
      <PostViewerContainer />
    </Layout>
  );
};

const menu: menuItem[] = [
  {
    id: 0,
    title: "menu group title",
    itemProps: [
      {
        id: 0,
        text: "WritePage",
        uri: "/write",
      },
      {
        id: 1,
        text: "PostPage",
        uri: "/post",
      },
      {
        id: 2,
        text: "MainPage",
        uri: "/",
      },
    ],
  },
  {
    id: 1,
    title: "menu group title",
    itemProps: [
      {
        id: 0,
        text: "test menu 1",
        uri: "",
      },
      {
        id: 1,
        text: "test menu 2",
        uri: "",
      },
      {
        id: 2,
        text: "test menu 3",
        uri: "",
      },
    ],
  },
];

export default PostPage;
