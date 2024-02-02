import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/write/Editor";
import { changeField, initialize } from "../../modules/write";

const EditorContainer = () => {
  const dispatch = useDispatch();

  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const tags = useSelector((state) => state.write.tags);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: "tags",
        value: nextTags,
      })
    );
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Editor
      title={title}
      body={body}
      onChangeField={onChangeField}
      tags={tags}
      onChangeTags={onChangeTags}
    />
  );
};

export default EditorContainer;
