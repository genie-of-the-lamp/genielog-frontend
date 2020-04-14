/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (<div css={style}>{children}</div>);
};

const style = css`
    display: flex;
    flex-direction: row;
`;

export default Layout;