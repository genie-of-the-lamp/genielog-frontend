/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Header from './Header';

type LayoutProps = {
    children?: React.ReactNode;
    full?: boolean;
}

const Layout = ({children, full}: LayoutProps) => {

    const style = css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    
        #content {
            ${full ? "" : "width: 800px; margin: 0 auto 0;"}
            height: 100%;
        }
    `;
    
    return (
        <div css={style}>
            <div id="header"><Header/></div>
            <div id="content">
                {children}
            </div>
        </div>
    );
};

export default Layout;