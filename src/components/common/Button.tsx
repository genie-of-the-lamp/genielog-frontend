/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette, {colorSet} from '../../lib/styles/palette';

type ButtonProps = {
    children: React.ReactNode;
    theme: keyof typeof colorSet;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, theme, disabled, onClick }) => {
    return (
        <button
            css={[style, themes(theme)]}
            disabled={disabled}
            onClick={e => {
                if (onClick) {
                    onClick(e)
                }
                (e.target as HTMLButtonElement).blur();
            }}
        >
            {children}
        </button>);
};

Button.defaultProps = {
    theme: 'violet',
}



const style = css`
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1rem;
    border-radius: 0.25rem;
    line-height: 1;
    display: inline-flex;
    align-item: center;
    justify-content: center;
    &: focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:disabled, &:disabled:hover {
      cursor: not-allowed;
      background: ${palette.gray[5]};
    }
`;

function themes(theme: keyof typeof colorSet) {
    return (css`
        background: ${colorSet[theme].background};
        color: ${colorSet[theme].color};
        &: hover {
            background: ${colorSet[theme].hover};
        }
        &: active { 
            background: ${colorSet[theme].active};
        }
    `);
    }

export default Button;