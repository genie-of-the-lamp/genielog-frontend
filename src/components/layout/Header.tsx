/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
import { User } from "../../lib/api/auth";

type HeaderProps = {
  user: User | null;
  theme: "default" | "inverse";
  onLogout: () => void;
};

const Header = ({ user, theme, onLogout }: HeaderProps) => {
  return (
    <div css={[style, themes[theme]]}>
      <div>
        {user ? (
          <div className="user">
            <p>{user.username}</p>{" "}
            <Link to="#" onClick={onLogout}>
              signout
            </Link>
          </div>
        ) : (
          <div className="user">
            <Link to="/signin">signin</Link>
          </div>
        )}
      </div>
      <div className="logo">
        <Link to="/">
          <span>g</span>enie-of-the-lamp
        </Link>
      </div>
    </div>
  );
};

Header.defaultProps = {
  theme: "default",
};

const style = css`
  display: flex;
  justify-content: space-between;
  padding-right: 3rem;
  font-size: 1rem;
  font-style: italic;
  font-weight: bold;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;

  .user {
    display: flex;
    align-items: baseline;
    padding-left: 50px;
    font-weight: 400;
    font-size: 0.825rem;
    p {
      font-size: 1rem;
      margin: 0 10px;
      font-weight: 500;
    }
    a {
      color: ${palette.gray[6]};
    }
  }

  a {
    text-decoration: none;
  }

  a:active {
    color: inherit;
  }

  span {
    font-size: 1.25rem;
    color: ${palette.violet[4]};
  }
`;

const themes = {
  default: css`
    span {
      font-size: 1.25rem;
      color: ${palette.violet[4]};
    }
  `,
  inverse: css`
    a {
      color: white;
    }
    background: ${palette.gray[9]};
    span {
      font-size: 1.25rem;
      //   color: white;
      color: ${palette.violet[2]};
    }
  `,
};

export default Header;
