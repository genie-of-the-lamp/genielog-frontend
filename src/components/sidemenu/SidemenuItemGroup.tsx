/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../../lib/styles/palette';
import { useState } from 'react';
import { SidemenuItemProps } from './SidemenuItem';
import SidemenuItemContainer from '../../containers/sidemenu/SidemenuItemContainer';

export type SidemenuItemGroupProps = {
    id: number;
    title: string;
    itemProps: SidemenuItemProps[];
    isToggled?: boolean;
    onClicked: () => void;
};

function SidemenuItemGroup({id, title, itemProps, isToggled, onClicked}: SidemenuItemGroupProps) {
    const sidemenuItems = itemProps.map((itemProp: SidemenuItemProps) => 
        <SidemenuItemContainer
            groupId={id}
            id={itemProp.id}
            key={itemProp.text}
            text={itemProp.text}
            uri={itemProp.uri}
        />
    );

    return (
        <div css={style}>
            <h4 onClick={onClicked}>{title}</h4>
            {isToggled && <div>{sidemenuItems}</div>}
        </div>);
}

const style = css`
    padding: 8px 0 2px 0;
    h4 {
        margin: 0;
    }
    div + div {
        border-top: 1px solid ${palette.gray[3]};
    }
`;

export default SidemenuItemGroup;