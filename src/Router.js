import Testing from 'pages/Testing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        {/* <Nav toggleDarkMode={toggleDarkMode} /> */}
        <Routes>
          {/* <Route path="/" element={<Main />} />
          <Route path="/create-thread" element={<CreateThread />} />
          <Route path="/thread/:threadId" element={<ThreadDetail />} /> */}
          <Route path="/" element={<Testing />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default Router;
