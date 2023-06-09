import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import palette from "../../lib/palette";

const SubInfo = ({ username, publishedDate, hasMarginTop }) => {
  return (
    <StyledSubInfo>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </StyledSubInfo>
  );
};

export default SubInfo;

const StyledSubInfo = styled.div`
  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};

  span+span: before {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: "\\B7";
  }
`;
