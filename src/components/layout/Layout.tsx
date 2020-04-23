/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from './Header';

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div css={style}>
            <div id="header"><Header/></div>
            <div id="content">
                {children}
            </div>
        </div>
    );
};

const style = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    #content {
        width: 800px;
        margin: 0 auto 0;
        height: 100%;
    }
`;

export default Layout;