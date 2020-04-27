/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules";
import { changeMarkdown, changeTitle } from "../../modules/write";
import WriteTitleTextArea from "../../components/write/WriteTitleTextArea";
import MarkdownEditor from "../../components/write/MarkdownEditor";
import { bindActionCreators } from "redux";
import WriteButtonGroupContainer from "./WriteButtonGroupContainer";
import { useHistory } from "react-router-dom";

function WriteEditorContainer() {
  const { title, body, user } = useSelector((state: RootState) => ({
    title: state.write.title,
    body: state.write.body,
    user: state.user.user,
  }));
  const dispatch = useDispatch();
  const history = useHistory();
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

  useEffect(() => {
    if (!user) {
      history.push("/signin");
    }
  }, [history, user]);

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
