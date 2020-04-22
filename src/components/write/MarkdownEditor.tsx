/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useRef, useEffect, useCallback } from 'react';
import CodeMirror, { EditorFromTextArea, Editor } from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/blackboard.css';
import palette from '../../lib/styles/palette';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/python/python';
import 'codemirror/addon/display/placeholder';

type MarkdownEditorProps =  {
  onChangeMarkdown : (markdown: string) => void;
  markdown: string;
}

const MarkdownEditor = ({
  onChangeMarkdown,
  markdown
}: MarkdownEditorProps) => {
  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const codemirror = useRef<EditorFromTextArea | null>(null);

  const onChange = useCallback((cm: Editor) => {
      onChangeMarkdown(cm.getValue());
  }, [onChangeMarkdown]);

  useEffect(() => {
    if(!textArea.current) return;
    const cm = CodeMirror.fromTextArea(textArea.current, {
      mode: 'markdown',
      theme: 'blackboard',
      lineWrapping: true,
      placeholder: "Write your story!"
    });

    codemirror.current = cm;

    cm.on('change', onChange);

    if(markdown) {
      cm.setValue(markdown);
    }

    return () => {
      cm.toTextArea();
    };
  }, []);

  return(
    <div css={style}>
        <textarea ref={textArea} style={{ display: 'none' }} />
    </div>
  );
}

const style = css`
height: 100%;
display: flex;
border: 1px solid ${palette.gray[4]};
border-left: none;
border-right: none;
flex-direction: column;
position: relative;
&::-webkit-scrollbar {
  border-radius: 3px;
  width: 6px;
  &:hover {
    width: 16px;
  }
  background: ${palette.gray[1]};
}
&::-webkit-scrollbar-thumb {
  z-index: 100;
  background: ${palette.gray[9]};
  /* -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75); */
}
& > .wrapper {
  min-height: 0;
  padding-bottom: 4rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
  padding-bottom: 3rem;
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 3rem; /* Horizontal padding of content */
}
.CodeMirror {
  min-height: 0;
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
  padding-top: 1rem;
  color: ${palette.gray[5]};
  font-family: 'Fira Mono', monospace;
  .cm-header {
    line-height: 1.5;
    color: ${palette.gray[3]};
  }
  .cm-header-1 {
    font-size: 2.5rem;
  }
  .cm-header-2 {
    font-size: 2rem;
  }
  .cm-header-3 {
    font-size: 1.5rem;
  }
  .cm-header-4,
  .cm-header-5,
  .cm-header-6 {
    font-size: 1.25em;
  }
  .cm-strong,
  .cm-em {
    color: ${palette.gray[3]};
  }
  .CodeMirror-placeholder {
    color: ${palette.gray[6]};
    font-style: italic;
  }
  .cm-quote {
    font-size: 1.25rem;
    color: ${palette.yellow[1]};
    font-style: italic;
  }
  .cm-comment {
    color: ${palette.violet[1]};
  }
}
`;

export default MarkdownEditor;
