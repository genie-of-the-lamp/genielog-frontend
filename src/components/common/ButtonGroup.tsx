/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';

export type ButtonGroupProps = {
    children: React.ReactNode;
    direction: "row" | 'column';
    alignRight?: boolean;
    gap: string | number;
    className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({children, direction, alignRight, gap, className}) => {
    return (
        <div
            css={[{
                display: 'flex',
                flexDirection: direction
            }, 
                gapStyle(direction, gap),
                alignRight && alignRightStyle] }

            className={className === undefined ? '' : className}
        >
            {children}
        </div>
    );
}

const gapStyle = (direction: 'row'|'column', gap: number|string) => {
    const margin = direction === 'row' ? 'marginLeft' : 'marginTop';
    return css({
        'button + button': {
            [margin]: gap
        }
    });
};

const alignRightStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;