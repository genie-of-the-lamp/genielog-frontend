import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import PostViewer from "../../components/post/PostViewer";
import { readPostAsync } from "../../modules/post";
import { withRouter } from "react-router-dom";

function PostViewerContainer({ match }: any) {
  const { postId } = match.params;
  const { post, loading, error } = useSelector(
    (state: RootState) => state.post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPostAsync.request(postId));

    // return () => {
    //     dispatch(unloadPost());
    // }
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error} />;
}

export default withRouter(PostViewerContainer);
