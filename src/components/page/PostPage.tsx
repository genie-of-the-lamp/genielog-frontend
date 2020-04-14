import React from 'react';
import Layout from "../layout/Layout";
import Sidemenu from "../sidemenu/Sidemenu";
import PostViewerContainer from "../../containers/post/PostViewerContainer";

const PostPage = () => {
    return(
    <Layout>
        <Sidemenu/>
        <PostViewerContainer />
    </Layout>
        );
}

export default PostPage;