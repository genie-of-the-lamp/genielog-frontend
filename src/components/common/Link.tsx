/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link as DefualtLink } from "react-router-dom";
import palette from "../../lib/styles/palette";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};
export default function Link({ to, children, className }: LinkProps) {
  return (
    <div css={style} className={className}>
      <DefualtLink to={to}>{children}</DefualtLink>
    </div>
  );
}

const style = css`
  a {
    text-decoration: none;
    color: ${palette.violet[3]};
  }
  a: hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
    color: ${palette.yellow[6]};
  }
`;
