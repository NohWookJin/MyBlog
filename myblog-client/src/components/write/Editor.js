import { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

import Quill from "quill";
import "quill/dist/quill.snow.css";

import Responsive from "../common/Responsive";
import TagBox from "./TagBox";
import WriteActionButtonsContainer from "../../containers/write/WriteActionButtonsContainer";

const Editor = ({ title, body, onChangeField, tags, onChangeTags }) => {
  const quillElement = useRef(null); // Quill 적용할 DivElement 설정
  const quillInstance = useRef(null); // Quill 인스턴스 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      bounds: "#editor-container",
      theme: "snow",
      placeholder: "당신의 이야기를 적어보세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <StyledContainer>
      <StyledEditor>
        <StyledInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onChangeTitle}
        />
        <TagBox tags={tags} onChangeTags={onChangeTags} />
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </StyledEditor>
      <StyledWriteActionButtons />
    </StyledContainer>
  );
};

export default Editor;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledEditor = styled(Responsive)`
  padding-top: 2rem;
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex: 1;
`;
const StyledInput = styled.input`
  font-size: 2.75rem;
  font-weight: bold;
  ouline: none;
  border: none;
  border-bottom: 1px soild ${palette.gray[1]};
  opacity: 0.9;
  padding-bottom: 0.5rem;
  margin-bottom: 0.3rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const QuillWrapper = styled.div`
  width: auto;
  .ql-editor {
    opacity: 0.7;
    padding: 0.5rem 0;
    min-height: 320px;
    font-size: 1.15rem;
    line-height: 1.5;
    border: none;
  }
  .ql-toolbar {
    border: none;
    opacity: 0.75;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .ql-container {
    border: none;
  }
  .ql-editor .ql-blank::before {
    top: 0px;
    left: 0px;
  }
`;

const StyledWriteActionButtons = styled(WriteActionButtonsContainer)`
  margin-top: auto;
`;
