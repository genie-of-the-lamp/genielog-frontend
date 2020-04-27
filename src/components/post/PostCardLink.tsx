/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import MarkdownViewer from "./MarkdownViewer";

type PostCardLinkProps = {
  title: string;
  description: string;
  username: string;
  datetime: string;
  uri: string;
};

const PostCardLink = ({
  title,
  description,
  username,
  datetime,
  uri,
}: PostCardLinkProps) => {
  return (
    <Link to={uri} css={style}>
      <div className="wrapper">
        <div className="title">
          <div>{title}</div>
          <span>{username}</span>
        </div>
        <div className="desc">
          <MarkdownViewer markdown={description} noCss />
        </div>
        <p className="date">{datetime}</p>
      </div>
    </Link>
  );
};

const style = css`
  text-decoration: none;
  font-size: 1rem;
  color: ${palette.gray[7]};
  .wrapper {
    height: 300px;
    // border: 2px solid ${palette.gray[4]};
    padding: 1rem;
    margin: 2rem;
    box-shadow:0 20px 20px rgba(0,0,0,.08);
    transition: box-shadow 200ms cubic-bezier(.02, .01, .47, 1), transform 200ms cubic-bezier(.02, .01, .47, 1);
    transition-property: box-shadow, transform;
    transition-duration: 200ms, 200ms;
    transition-timing-function: cubic-bezier(0.02, 0.01, 0.47, 1), cubic-bezier(0.02, 0.01, 0.47, 1);
  }
  .wrapper: hover {
    box-shadow: 0 40px 40px rgba(0,0,0,.16);
    transform: translate(0,-20px);
    transition-delay: 0s !important;
    transition-duration: 0.5s;
  }
  .wrapper: hover::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 20px;
  }
  .title {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;
    height: 85px;
  }
  span {
    font-size: 0.825rem;
    display: flex;
    flex-direction: column-reverse;
  }
  .desc {
    height: 108px;
    overflow: hidden;
  }
  .date {
    font-size: 0.825rem;
  }

  &:hover {
    .title {
      color: ${palette.violet[4]};
    }
  }
  &:active {
    .title {
      color: ${palette.yellow[5]};
    }
  }
`;

export default PostCardLink;
