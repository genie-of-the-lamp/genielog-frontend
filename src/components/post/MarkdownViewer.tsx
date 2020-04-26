/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import sanitize from "sanitize-html";
import "../../lib/styles/prism.css";
import remark from "remark";
import htmlPlugin from "remark-html";
import breaks from "remark-breaks";
import prismPlugin from "../../lib/remark/prismPlugin";
import palette from "../../lib/styles/palette";

function filter(html: string) {
  return sanitize(html, {
    allowedTags: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "p",
      "a",
      "ul",
      "ol",
      "nl",
      "li",
      "b",
      "i",
      "strong",
      "em",
      "strike",
      "code",
      "hr",
      "br",
      "div",
      "table",
      "thead",
      "caption",
      "tbody",
      "tr",
      "th",
      "td",
      "pre",
      "iframe",
      "span",
      "img",
      "del",
    ],
    allowedAttributes: {
      a: ["href", "name", "target"],
      img: ["src"],
      iframe: ["src", "allow", "allowfullscreen", "scrolling"],
      "*": ["class", "id"],
    },
  });
}

type MarkdownViewerProps = {
  markdown: string;
  noCss?: boolean;
};

const MarkdownViewer = ({ markdown, noCss }: MarkdownViewerProps) => {
  const html = filter(
    remark()
      .use(breaks) //용도가 뭐지
      .use(htmlPlugin)
      .use(prismPlugin)
      .processSync(markdown)
      .toString()
  );
  if (noCss)
    return <div css={noStyle} dangerouslySetInnerHTML={{ __html: html }} />;
  return <div css={style} dangerouslySetInnerHTML={{ __html: html }} />;
};

const noStyle = css`
  * {
    font-size: 1rem;
    color: ${palette.gray[8]};
    font-weight: 400;
    margin: 0;
  }
  pre {
    background: none;
  }
`;
const style = css`
  font-size: 1rem;
  line-height: 1.75;
  color: ${palette.gray[7]};
  word-break: keep-all;
  letter-spacing: -0.025rem;
  display: flex;
  flex-direction: column;
  p {
  }

  a {
    font-weight: 600;
    color: ${palette.violet[3]};
    text-decoration: none;
    &:hover {
      color: ${palette.violet[2]};
      text-decoration: underline;
    }
  }

  pre {
    margin: 0 1rem;
    border-radius: 8px;
    border: 1px solid ${palette.violet[2]};
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1.25em;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.5;
    margin-bottom: 0.5rem;
    color: ${palette.gray[8]};
  }

  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 3rem;
  }

  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-left: 5px solid ${palette.yellow[6]};
    background: ${palette.gray[1]};
    margin-left: 0;
    margin-right: 0;
    padding: 0.1rem 1rem;
    color: ${palette.yellow[7]};
    font-size: 1.2rem;
    font-style: italic;

    p {
      margin: 0;
    }
  }
`;

export default MarkdownViewer;
