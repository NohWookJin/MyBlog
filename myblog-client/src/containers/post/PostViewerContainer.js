import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";

const PostViewerContaienr = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
  }));

  useEffect(() => {
    // 마운트 동작
    dispatch(readPost(postId));
    // 언마운트 동작
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <PostViewer post={post} error={error} loading={loading} />;
};

export default PostViewerContaienr;
