import React, { useEffect } from "react";
import WriteButtonGroup from "../../components/write/WriteButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { useHistory } from "react-router";
import { writePost, modifyPost } from "../../modules/write";

const WriteButtonGroupContainer = () => {
  const history = useHistory();
  const { title, body, post, error, postId } = useSelector(
    (state: RootState) => state.write
  );
  const dispatch = useDispatch();

  const onBack = () => {
    history.goBack();
  };

  const onPost = () => {
    dispatch(writePost.request({ title, body }));
  };

  const onModify = () => {
    if (postId) {
      dispatch(modifyPost.request({ id: postId, title, body }));
    }
  };

  useEffect(() => {
    if (post) {
      const { _id } = post;
      history.push(`/post/${_id}`);
    }
    if (error) {
      console.error(error);
    }
  }, [post, history, error]);

  return (
    <WriteButtonGroup
      onBack={onBack}
      onPost={postId ? onModify : onPost}
      modified={!!postId}
    />
  );
};

export default WriteButtonGroupContainer;
