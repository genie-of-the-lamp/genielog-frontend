/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PostHeader from './PostHeader';
import MarkdownViewer from './MarkdownViewer';

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
            <MarkdownViewer markdown={body}/>
        </div>
    );
}

const style = css`
    display: flex;
    flex-direction: column;
`;

export default PostViewer;