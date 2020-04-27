/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PostHeader from "./PostHeader";
import MarkdownViewer from "./MarkdownViewer";
import { Post } from "../../lib/api/post";
import { AxiosError } from "axios";
import ButtonGroup from "../common/ButtonGroup";
import Button from "../common/Button";
import PostRemoveModal from "./PostRemoveModal";
import { useState } from "react";

type PostViewerProps = {
  post: Post | null;
  loading: boolean;
  error: AxiosError | null;
  onDelete: () => void;
  onModify: () => void;
};

const PostViewer = ({
  post,
  loading,
  error,
  onDelete,
  onModify,
}: PostViewerProps) => {
  const [modalState, setModalState] = useState(false);
  const onClickDelete = () => {
    setModalState(true);
  };
  const onCancel = () => {
    setModalState(false);
  };
  const onConfirm = () => {
    setModalState(false);
    onDelete();
  };
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
      <ButtonGroup direction="row" gap="" alignRight>
        <Button theme="violetInverse" onClick={onModify}>
          수정
        </Button>
        <Button theme="violetInverse" onClick={onClickDelete}>
          삭제
        </Button>
      </ButtonGroup>
      <MarkdownViewer markdown={post.body} />
      <PostRemoveModal
        visible={modalState}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </div>
  );
};

const style = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 3.5rem;
`;

export default PostViewer;
