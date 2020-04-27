/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Header from "./Header";
import HeaderContainer from "../../containers/layout/HeaderContainer";

type LayoutProps = {
  children?: React.ReactNode;
  full?: boolean;
  headerTheme?: "default" | "inverse";
};

const Layout = ({ children, full, headerTheme }: LayoutProps) => {
  const style = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    #header {
      z-index: 1;
    }

    #content {
      ${full ? "" : "width: 800px; margin: 0 auto 0;"}
      height: 100%;
      padding-top: 3rem;
    }
  `;

  return (
    <div css={style}>
      <div id="header">
        {headerTheme ? (
          <HeaderContainer theme={headerTheme} />
        ) : (
          <HeaderContainer />
        )}
      </div>
      <div id="content">{children}</div>
    </div>
  );
};

export default Layout;
