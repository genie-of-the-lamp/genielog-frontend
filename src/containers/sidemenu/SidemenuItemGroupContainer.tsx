import React from 'react';
import SidemenuItemGroup from '../../components/sidemenu/SidemenuItemGroup';
import { SidemenuItemProps } from '../../components/sidemenu/SidemenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { bindActionCreators } from 'redux';
import { toggleMenuGroup } from '../../modules/sidemenu';

type SidemenuItemGroupContainerProps = {
    id: number; 
    title: string; 
    itemProps: SidemenuItemProps[];
}
const SidemenuItemGroupContainer = ({id, title, itemProps}: SidemenuItemGroupContainerProps) =>{
    const sidemenuState = useSelector((state: RootState) => state.sidemenu);
    const dispatch = useDispatch();

    const toggle = bindActionCreators(toggleMenuGroup, dispatch);
    
    var isToggled = false;
    if (sidemenuState.group[id]) {
        isToggled = sidemenuState.group[id].toggled;
    }
    
    // const sidemenuState = useSelector((state: RootState) => state.sidemenu);
    // const dispatch = useDispatch();
    // const changeItemState = bindActionCreators(changeState, dispatch);
    // const selected = sidemenuState.group[groupId].menu[id].selected;
    // const onClicked = () => {
    //     const payload = {
    //         groupId,
    //         menuId: id
    //     }
    //     changeItemState(payload);
    // }

    const onClicked = () => {
        toggle(id);
    };

    return (
        <SidemenuItemGroup 
            id={id} 
            title={title} 
            itemProps={itemProps} 
            isToggled={isToggled} 
            onClicked={onClicked}
        />
    )
}

export default SidemenuItemGroupContainer;