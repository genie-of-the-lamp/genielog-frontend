import { createAction, createReducer } from 'typesafe-actions';

const CHANGE_MARKDOWN = 'write/CHANGE_MARKDOWN';
const CHANGE_TITLE = 'write/CHANGE_TITLE';

export const changeMarkdown = createAction(CHANGE_MARKDOWN)<string>();
export const changeTitle = createAction(CHANGE_TITLE)<string>();

type ChangeMarkdown = ReturnType<typeof changeMarkdown>;
type ChangeTitle = ReturnType<typeof changeTitle>;

type WriteState = {
    title: string;
    body: string;
}

const initialState: WriteState = {
    title: "",
    body: ""
}

const write = createReducer<WriteState, any>(initialState, {
    [CHANGE_MARKDOWN]: (state, action: ChangeMarkdown) => {
        return { ...state, body: action.payload }
    },
    [CHANGE_TITLE]: (state, action: ChangeTitle) => {
        return { ...state, title: action.payload }
    }
});

export default write;