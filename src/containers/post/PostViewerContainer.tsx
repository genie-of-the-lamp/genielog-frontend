import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import PostViewer from "../../components/post/PostViewer";
import { readPostAsync } from "../../modules/post";
import { withRouter, useHistory } from "react-router-dom";
import { deletePost } from "../../lib/api/post";
import { setPost } from "../../modules/write";

function PostViewerContainer({ match }: any) {
  const { postId } = match.params;
  const { post, loading, error, user } = useSelector((state: RootState) => ({
    post: state.post.post,
    loading: state.post.loading,
    error: state.post.error,
    user: state.user.user,
  }));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(readPostAsync.request(postId));

    // return () => {
    //     dispatch(unloadPost());
    // }
  }, [dispatch, postId]);

  const onDelete = async () => {
    try {
      await deletePost(postId);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  const onModify = () => {
    if (post) {
      dispatch(setPost(post));
      history.push("/write");
    }
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      onDelete={onDelete}
      onModify={onModify}
      privilege={post?.user.email === user?.email}
    />
  );
}

export default withRouter(PostViewerContainer);
