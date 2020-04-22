/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ChangeEvent } from 'react';

type WriteTitleTextAreaProps = {
    title: string;
    onTitleChange: (title: string) => void;
}

const WriteTitleTextArea = ({title, onTitleChange}: WriteTitleTextAreaProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTitleChange(e.target.value);
    }
    return(
        <div css={style}>
            <input type="text" placeholder="Title..." value={title} onChange={onChange} />
        </div>
    );
}

const style = css`
    padding-left: 3rem;
    input {
        padding: 1rem 0;
        font-size: 2rem;
        font-weigt: 600;
        border: none;
    }
    input:focus {
        outline: none;
    }
`;

export default WriteTitleTextArea;
