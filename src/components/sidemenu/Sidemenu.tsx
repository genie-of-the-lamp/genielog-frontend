/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SidemenuItemProps } from './SidemenuItem';
import SidemenuItemGroup from './SidemenuItemGroup';

type SidemenuProps = {
    children?: React.ReactNode;
    className?: string;
};
function Sidemenu({children, className}: SidemenuProps) {
    const sideMenuGroups = menu.map(data => 
      <SidemenuItemGroup {...data} key={data.id} />
    )
    return(
        <div 
            css={style}
            className={className}
        >
            {sideMenuGroups}
            {children}
        </div>
    );
}

const style = css`
    width: 300px;
`;

type menuItem = {
  id: number;
  title: string;
  itemProps: SidemenuItemProps[];
}

const menu: menuItem[] = [
  {
    id: 0,
    title: "menu group title",
    itemProps: [
      {
        text: "test menu 1",
        uri: ""
      },
      {
        text: "test menu 2",
        uri: "",
        selected: true
      },
      {
        text: "test menu 3",
        uri: ""
      },
    ]
  },
  {
    id: 1,
    title: "menu group title",
    itemProps: [
      {
        text: "test menu 1",
        uri: ""
      },
      {
        text: "test menu 2",
        uri: "",
        selected: true
      },
      {
        text: "test menu 3",
        uri: ""
      },
    ]
  }
]
export default Sidemenu;