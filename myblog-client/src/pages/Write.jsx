import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
import Preview from "../components/write/Preview";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Write = () => {
  return (
    <StyledResponsive>
      <Helmet>
        <title>글 작성하기</title>
      </Helmet>
      <EditorContainer />
      <Preview />
    </StyledResponsive>
  );
};

export default Write;

const StyledResponsive = styled(Responsive)`
  display: flex;
  width: 100%;
`;

// TagBox < Editor < EditorContainer
