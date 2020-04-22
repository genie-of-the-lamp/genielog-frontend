/** @jsx jsx */
import { jsx } from '@emotion/core';
import WriteEditorContainer from '../containers/write/WriteEditorContainer';
import WriteButtonGroupContainer from '../containers/write/WriteButtonGroupContainer';

const WritePage = () => {
    return(
        <div>
            <WriteEditorContainer />
            <WriteButtonGroupContainer />
        </div>
    );
}

export default WritePage;