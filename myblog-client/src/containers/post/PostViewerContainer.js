import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import PostActionButton from "../../components/post/PostActionButton";
import { setOriginalPost } from "../../modules/write";

const PostViewerContaienr = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading["post/READ_POST"],
      user: user.user,
    })
  );

  useEffect(() => {
    // 마운트 동작
    dispatch(readPost(postId));
    // 언마운트 동작
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      error={error}
      loading={loading}
      actionButtons={ownPost && <PostActionButton onEdit={onEdit} />}
    />
  );
};

export default PostViewerContaienr;
