/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

type MarkdownEditorProps =  {
    onChangeMarkdown: (markdown: string) => void;
    onChangeTitle: (title: string) => void;
    onConvert: (markdown: string) => void;
    title: string;
    markdown: string;
    tagInput: React.ReactNode;
    footer: React.ReactNode;
    onUpload: () => void;
    lastUploadedImage: string | null;
    initialBody: string;
  }
class MarkdownEditor extends React.Component<MarkdownEditorProps> {
    render () {
        return(<div></div>);
    }
}

export default MarkdownEditor;