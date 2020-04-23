/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SidemenuItemProps } from './SidemenuItem';
import SidemenuItemGroupContainer from '../../containers/sidemenu/SidemenuItemGroupContainer';

export type SidemenuProps = {
    menuItem: menuItem[];
    children?: React.ReactNode;
    className?: string;
};

export type menuItem = {
  id: number;
  title: string;
  itemProps: SidemenuItemProps[];
}

function Sidemenu({menuItem, children, className}: SidemenuProps) {
    const sideMenuGroups = menuItem.map(data => 
      <SidemenuItemGroupContainer {...data} key={data.id} />
    )
    return(
        <div css={style}>
          <div>
            <div 
                className={className}
            >
                {sideMenuGroups}
                {children}
            </div>
          </div>
        </div>
    );
}

const style = css`
    position: relative;
    margin-top: 2rem;
    
    & > div {
      width: 130px;
      position: absolute;
      left: -170px;
    }
    
    & > div > div {
      position: fixed;
      top: 250px;
    }
`;

export default Sidemenu;