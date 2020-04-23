/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

type PostCardLinkProps = {
    title: string;
    description: string;
    username: string;
    datetime: string;
    uri: string;
}

const PostCardLink = ({title, description, username, datetime, uri}: PostCardLinkProps) => {

    return (
        <Link to={uri} css={style}>
            <div className="wrapper">
                    <div className="title">
                    <div>
                        {title}
                    </div>
                    <span>
                        {username}
                    </span>
                    </div>
                    <p className="desc">
                        {description}
                    </p>
                <p className="date">{datetime}</p>
            </div>
        </Link>
    );
}

const style = css`
    text-decoration: none;
    font-size: 1rem;
    color: ${palette.gray[7]};
    .wrapper {
        height: 300px;
        border: 2px solid ${palette.gray[4]};
        padding: 1rem;
        margin: 2rem;
    }
    .title {
        width: 100%;
        margin: 2rem 0;
        display: flex;
        justify-content: flex-end;
        font-size: 2rem;
        font-weight: 600;
        height:85px;
    }
    span {
        font-size: 0.825rem;
        display: flex;
        flex-direction: column-reverse;
    }
    .desc {
        height: 110px;
    }
    .date {
        font-size: 0.825rem;
    }

    &:hover {
        .title{
            color: ${palette.violet[4]}
        }
    }
    &:active {
        .title{
            color: ${palette.yellow[5]}
        }
    }
`;

export default PostCardLink;