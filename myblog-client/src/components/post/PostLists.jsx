import styled from "styled-components";
import Responsive from "../common/Responsive";
import { Link } from "react-router-dom";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <StyledPostItem>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </StyledPostItem>
  );
};

const PostLists = ({ posts, loading, error }) => {
  if (error) {
    return <StyledPostList>에러가 발생했습니다</StyledPostList>;
  }
  return (
    <StyledPostList>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      )}
    </StyledPostList>
  );
};

export default PostLists;

const StyledPostList = styled(Responsive)`
  margin-top: 3rem;
`;

const StyledPostItem = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid black;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &: hover {
      color: gray;
    }
  }
  p {
    margin-top: 2rem;
  }
`;
