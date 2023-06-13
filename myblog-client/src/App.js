import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import Write from "./pages/Write";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/write" element={<Write />} />
      <Route path="/:username">
        <Route index element={<PostList />} />
        <Route path=":postId" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default App;
