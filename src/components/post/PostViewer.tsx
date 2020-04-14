/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PostHeader from './PostHeader';

type PostViewerProps = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PostViewer = ({userId, id, title, body}: PostViewerProps) => {
    return (
        <div css={style}> 
            <PostHeader title={title} username={userId} />
            <div>{body}</div>
        </div>
    );
}

const style = css``;

export default PostViewer;