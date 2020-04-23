import React, { useEffect } from 'react';
import Sidemenu, { menuItem } from '../../components/sidemenu/Sidemenu';
import { useDispatch } from 'react-redux';
import { setMenu, changeState } from '../../modules/sidemenu';
import { bindActionCreators } from 'redux';

type SidemenuContainerProps = {
    menuItem: menuItem[];
    children?: React.ReactNode;
    className?: string;
}

const SideMenuContainer = ({
    menuItem, 
    children, 
    className}: SidemenuContainerProps) => {

    const dispatch = useDispatch();
    const actionCreator = bindActionCreators({setMenu, changeState}, dispatch);

    useEffect(() => {
        actionCreator.setMenu(menuItem)
    },[]);

    return(
        <Sidemenu 
            menuItem={menuItem} 
            className={className}
            >
                {children}
            </Sidemenu>
    );
}

export default SideMenuContainer;