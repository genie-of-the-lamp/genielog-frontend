import React from 'react';
import SidemenuItem from '../../components/sidemenu/SidemenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { changeState } from '../../modules/sidemenu';
import { bindActionCreators } from 'redux';

export type SidemenuItemContainerProps = {
    groupId: number;
    id: number;
    text: string;
    uri: string;
}

const SidemenuItemContainer = ({ groupId, id, text, uri }: SidemenuItemContainerProps) => {
    const sidemenuState = useSelector((state: RootState) => state.sidemenu);
    const dispatch = useDispatch();
    const changeItemState = bindActionCreators(changeState, dispatch);
    const selected = sidemenuState.group[groupId].menu[id].selected;
    const onClicked = () => {
        const payload = {
            groupId,
            menuId: id
        }
        changeItemState(payload);
    }

    return <SidemenuItem id={id} text={text} uri={uri} selected={selected} onClicked={onClicked} />
}

export default SidemenuItemContainer;