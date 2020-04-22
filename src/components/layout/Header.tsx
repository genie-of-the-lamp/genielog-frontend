/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../../lib/styles/palette';

const Header = () => {

    return(
        <div css={style}>
            <p><span>g</span>enie-of-the-lamp</p>
        </div>
    );
}

const style = css`
    display: flex;
    justify-content: flex-end;
    padding-right: 3rem;
    font-size: 1rem;
    font-style: italic;
    font-weight: bold;
    height: 50px;
    width: 100%;
    box-sizing: border-box;

    p > span {
        font-size: 1.25rem;
        color: ${palette.violet[4]}
    }
`;

export default Header;