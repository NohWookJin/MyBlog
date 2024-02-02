import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListsContainer from "../containers/post/PostListsContainer";
import PaginationContainer from "../containers/post/PaginationContainer";

const PostList = () => {
  return (
    <>
      <HeaderContainer />
      <PostListsContainer />
      <PaginationContainer />
    </>
  );
};

export default PostList;
