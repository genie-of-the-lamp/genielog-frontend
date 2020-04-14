/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../../lib/styles/palette';

export type SidemenuItemProps = {
    text: string;
    uri: string;
    selected?: boolean;
}

function SidemenuItem({text, uri, selected}: SidemenuItemProps) {
    return (
        <div css={[style, selected && selectedColor]}>
            {selected ? <a>{text}</a> : <a href={uri}>{text}</a> }
        </div>
    );
}

const style = css`
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    font-size: 1rem;
    text-align: center;
    a {
        display: inline-flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: ${palette.gray[8]};
    }
`;

const selectedColor = css`
    a{
        color: ${palette.gray[6]};
        font-weight: 600;
    }
    border-bottom: 3px solid ${palette.violet[6]};
`;

export default SidemenuItem;