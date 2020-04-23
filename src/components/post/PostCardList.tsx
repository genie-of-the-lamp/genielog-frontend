/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const PostCardList = (posts: []) => {
    const list = posts.map(post => {});
    return(
        <div css={style}>
            {list}
        </div>
    );
}

const style = css``;

export default PostCardList;