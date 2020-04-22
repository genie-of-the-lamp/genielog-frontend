import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { changeMarkdown, changeTitle } from '../../modules/write'
import WriteTitleTextArea from '../../components/write/WriteTitleTextArea';
import MarkdownEditor from '../../components/write/MarkdownEditor';
import { bindActionCreators } from 'redux';

function WriteEditorContainer(){
    const { title, body } = useSelector((state: RootState) => state.write);
    const dispatch = useDispatch();
    const actionCreators = useMemo(
        () => bindActionCreators({
            changeMarkdown,
            changeTitle
        }, dispatch)
    ,[dispatch]);

    return (
        <div>
            <WriteTitleTextArea onTitleChange={actionCreators.changeTitle} title={title}/>
            <MarkdownEditor markdown={body} onChangeMarkdown={actionCreators.changeMarkdown}/>
        </div>
    );
}

export default WriteEditorContainer;
