/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../../lib/styles/palette';
import { useState } from 'react';
import SidemenuItem, { SidemenuItemProps } from './SidemenuItem';

type SidemenuItemGroupProps = {
    title: string;
    itemProps: SidemenuItemProps[];
    isToggled?: boolean;
};

function SidemenuItemGroup({title, itemProps, isToggled}: SidemenuItemGroupProps) {
    const [toggled, setToggled] = useState<boolean>(isToggled ? true : false);
    const sidemenuItems = itemProps.map((itemProp: SidemenuItemProps) => 
        <SidemenuItem 
            key={itemProp.text}
            text={itemProp.text}
            uri={itemProp.uri}
            selected={itemProp.selected} 
        />
    );

    return (
        <div css={style}>
            <h4 onClick={()=>setToggled(!toggled)}>{title}</h4>
            {toggled && <div>{sidemenuItems}</div>}
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