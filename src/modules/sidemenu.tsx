import { createAction, createReducer } from "typesafe-actions";
import { menuItem } from "../components/sidemenu/Sidemenu";
import { statement } from "babel__template";

const SET_MENU = 'sidemenu/SET_MENU';
const CHANGE_ITEM_STATE = 'sidemenu/CHANGE_ITEM_STATE';
const TOGGLE_MENU_GROUP = 'sidemenu/TOGGLE_MENU_GROUP';

export type ChangeValue = {
    groupId: number;
    menuId: number;
}

export const setMenu = createAction(SET_MENU)<menuItem[]>();
export const changeState = createAction(CHANGE_ITEM_STATE)<ChangeValue>();
export const toggleMenuGroup = createAction(TOGGLE_MENU_GROUP)<number>();

type SetMenu = ReturnType<typeof setMenu>;
type ChangeState = ReturnType<typeof changeState>;
type ToggleMenuGroup = ReturnType<typeof toggleMenuGroup>;

type SidemenuState = {
    group: {
        id: number;
        toggled: boolean;
        menu: {
            id: number;
            selected: boolean;
        }[]
    }[]
}

const initialState: SidemenuState = {
    group: []
}

const sidemenu = createReducer<SidemenuState, any>(initialState, {
    [SET_MENU]: (state, action: SetMenu) => {
        const list = action.payload;
        const newState:SidemenuState = {
            group: list.map(groupItem => {
                return {
                    id: groupItem.id,
                    toggled: false,
                    menu: groupItem.itemProps.map(item => {
                        return {
                            id: item.id,
                            selected: item.selected ? true : false
                        }
                    })
                }
            })
        };
        return newState;
    },
    [CHANGE_ITEM_STATE]: (state, action: ChangeState) => {
        const {groupId, menuId} = action.payload;
        const newState: SidemenuState = {
            group: state.group.map(groupItem => {
                return groupItem.id===groupId ? {
                    ...groupItem,
                    menu: groupItem.menu.map(item => {
                    return item.id===menuId ? {...item, selected:!item.selected} : item
                })} 
                : groupItem
            })
        }
        return newState;
    },
    [TOGGLE_MENU_GROUP]: (state, action: ToggleMenuGroup) => {
        const groupId = action.payload;
        return {
            group: 
                state.group.map(groupItem => groupId === groupItem.id 
                ? {...groupItem, toggled: !groupItem.toggled}
                : groupItem
            
            )
        }
    }
});

export default sidemenu;