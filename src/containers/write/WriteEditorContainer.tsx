/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { changeMarkdown, changeTitle } from "../../modules/write";
import WriteTitleTextArea from "../../components/write/WriteTitleTextArea";
import MarkdownEditor from "../../components/write/MarkdownEditor";
import { bindActionCreators } from "redux";
import WriteButtonGroupContainer from "./WriteButtonGroupContainer";

function WriteEditorContainer() {
  const { title, body } = useSelector((state: RootState) => state.write);
  const dispatch = useDispatch();
  const actionCreators = useMemo(
    () =>
      bindActionCreators(
        {
          changeMarkdown,
          changeTitle,
        },
        dispatch
      ),
    [dispatch]
  );

  return (
    <div css={style}>
      <WriteTitleTextArea
        onTitleChange={actionCreators.changeTitle}
        title={title}
      />
      <MarkdownEditor
        markdown={body}
        onChangeMarkdown={actionCreators.changeMarkdown}
      />
      <WriteButtonGroupContainer />
    </div>
  );
}

const style = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default WriteEditorContainer;
