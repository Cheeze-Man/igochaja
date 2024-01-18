import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Authentication/Login/Login';
import SignUp from 'pages/Authentication/SignUp/SignUp';
import Main from 'pages/Main/Main';
import EditProfile from 'pages/MyPage/EditProfile/EditProfile';
import MyComments from 'pages/MyPage/MyComments/MyComments';
import MyLikes from 'pages/MyPage/MyLikes/MyLikes';
import MyPosts from 'pages/MyPage/MyPosts/MyPosts';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/my-page/edit-profile" element={<EditProfile />} />
          <Route path="/my-page/posts" element={<MyPosts />} />
          <Route path="/my-page/comments" element={<MyComments />} />
          <Route path="/my-page/likes" element={<MyLikes />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
