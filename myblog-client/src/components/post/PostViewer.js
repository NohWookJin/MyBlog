import styled from "styled-components";
import Responsive from "../common/Responsive";
import { Helmet } from "react-helmet-async";

const PostViewer = ({ post, error, loading, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return alert("미존재 페이지");
    }
    return alert("오류 발생");
  }

  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;

  return (
    <StyledPostViewer>
      <Helmet>{title}</Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>{user.username}</b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfo>
        {/* <Tags>
          {tags.map((tag) => (
            <div className="tag">{tag}</div>
          ))}
        </Tags> */}
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </StyledPostViewer>
  );
};

export default PostViewer;

const StyledPostViewer = styled(Responsive)`
  margin-top: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PostHead = styled.div`
  padding-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const SubInfo = styled.div`
  display: flex;
  span + span:before {
    content: "\\B7";
    padding: 0 0.5rem;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
`;
