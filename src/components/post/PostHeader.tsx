/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import palette from "../../lib/styles/palette";
import Link from "../common/Link";

type PostHeaderProps = {
  title: string;
  user: {
    username: string;
    email: string;
  };
  date: string;
  userHide?: boolean;
};

const PostHeader = ({ title, user, date, userHide }: PostHeaderProps) => {
  return (
    <div css={style}>
      <h2>{title}</h2>
      <div>
        <p>{userHide ? "" : <Link to="#">{user.username}</Link>}</p>{" "}
        <p>{date}</p>
      </div>
    </div>
  );
};

const style = css`
  width: 100%;
  height: 250px;
  // background: ${palette.gray[1]};
  border-bottom: 1px solid ${palette.gray[4]};
  padding: 0 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
  color: ${palette.gray[7]};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin: 0;
    padding-bottom: 50px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 55px;
  }

  div p {
    margin: 0;
    font-size: 0.85rem;
  }
`;

export default PostHeader;
