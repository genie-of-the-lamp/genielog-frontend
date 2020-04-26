import React, { useEffect } from "react";
import PostCardList from "../../components/post/PostCardList";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import qs from "qs";
import { listPosts } from "../../modules/posts";
import ButtonGroup from "../../components/common/ButtonGroup";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";

const PostCardListContainer = () => {
  const history = useHistory();
  const { posts, error, user } = useSelector((state: RootState) => ({
    posts: state.posts.posts,
    error: state.posts.error,
    user: state.user.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const { page, email } = qs.parse(history.location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts.request({ page, email }));
  }, [dispatch, history.location.search]);

  const showButton = user ? true : false;
  return (
    <div>
      {showButton && (
        <ButtonGroup direction="row" gap="" alignRight>
          <Button
            theme="violet"
            onClick={() => {
              history.push("/write");
            }}
          >
            <Icon icon="pencil" />
          </Button>
        </ButtonGroup>
      )}

      {error && <div>포스트 리스트를 불러오기에 실패했습니다.</div>}
      {!error && !posts && <div>작성된 포스트가 없습니다.</div>}
      {posts && <PostCardList posts={posts} />}
    </div>
  );
};

export default PostCardListContainer;
