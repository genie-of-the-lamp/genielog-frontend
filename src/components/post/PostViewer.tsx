/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PostHeader from "./PostHeader";
import MarkdownViewer from "./MarkdownViewer";
import { Post } from "../../lib/api/post";
import { AxiosError } from "axios";

type PostViewerProps = {
  post: Post | null;
  loading: boolean;
  error: AxiosError | null;
};

const PostViewer = ({ post, loading, error }: PostViewerProps) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <div css={style}>존재하지 않는 포스트 입니다.</div>;
    }
    return <div css={style}>포스트를 불러오기에 실패하였습니다.</div>;
  }

  if (loading || !post) {
    return null;
  }
  return (
    <div css={style}>
      <PostHeader
        title={post.title}
        user={post.user}
        date={post.publishedDate}
      />
      <MarkdownViewer markdown={post.body} />
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.5rem;
`;

export default PostViewer;
