// 반응형 컴포넌트 => REUSABLE COMPONENT

import styled from "styled-components";

const Responsive = ({ children, ...rest }) => {
  return <ResposiveBlock {...rest}>{children}</ResposiveBlock>;
};

export default Responsive;

const ResposiveBlock = styled.div`
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
