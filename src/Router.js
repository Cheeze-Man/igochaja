import Login from 'pages/Authentication/Login/Login';
import SignUp from 'pages/Authentication/SignUp/SignUp';
import Main from 'pages/Main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
