import { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/palette";
import Responsive from "../common/Responsive";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const Editor = () => {
  const quillElement = useRef(null); // Quill 적용할 DivElement 설정
  const quillInstance = useRef(null); // Quill 인스턴스 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underine", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });
  }, []);

  return (
    <StyledEditor>
      <StyledInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </StyledEditor>
  );
};

export default Editor;

const StyledEditor = styled(Responsive)`
  padding: 5rem 0;
`;
const StyledInput = styled.input`
  font-size: 3rem;
  ouline: none;
  border: none;
  border-bottom: 1px soild ${palette.gray[4]};
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor .ql-blank::before {
    left: 0px;
  }
`;
