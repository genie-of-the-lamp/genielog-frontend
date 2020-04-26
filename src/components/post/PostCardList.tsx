/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Post } from "../../lib/api/post";
import PostCardLink from "./PostCardLink";

type PostCardListProps = {
  posts: Post[];
};
const PostCardList = ({ posts }: PostCardListProps) => {
  const list = posts.map((post) => (
    <PostCardLink
      key={post._id}
      title={post.title}
      description={post.body}
      username={post.user.username}
      datetime={post.publishedDate}
      uri={`/post/${post._id}`}
    />
  ));
  return <div css={style}>{list}</div>;
};

const style = css``;

export default PostCardList;
