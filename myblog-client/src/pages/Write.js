import EditorContainer from "../containers/write/EditorContainer";
import Responsive from "../components/common/Responsive";
import Preview from "../components/write/Preview";
import styled from "styled-components";

const Write = () => {
  return (
    <StyledResponsive>
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
