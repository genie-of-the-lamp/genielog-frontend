/** @jsx jsx */
import { jsx } from '@emotion/core';
import WriteEditorContainer from '../containers/write/WriteEditorContainer';
import Layout from '../components/layout/Layout';

const WritePage = () => {
    return(
        <Layout full>
            <WriteEditorContainer />
        </Layout>
    );
}

export default WritePage;