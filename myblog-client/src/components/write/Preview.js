import React from "react";
import styled from "styled-components";
import palette from "../../lib/palette";

// Preview는 저장된 리덕스 스토어에서 useSelector로 가져올 예정
const Preview = () => {
  return <StyledPreview></StyledPreview>;
};

export default Preview;

const StyledPreview = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: ${palette.gray[1]};
`;
