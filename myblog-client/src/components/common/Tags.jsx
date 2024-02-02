import styled from "styled-components";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <StyledTags>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tags}
        </Link>
      ))}
    </StyledTags>
  );
};

export default Tags;

const StyledTags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: gray;
    }
  }
`;
