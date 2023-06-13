import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login/index.jsx";
import Signup from "./pages/signup/index.jsx";
import AfterLoginMain from "./pages/afterLogin/index.jsx";
import Mypage from "./pages/mypage/index.jsx";
import MypageChat from "./pages/mypage/chat/index.jsx";
import Store from "./pages/store/index.jsx";
import Grow from "./pages/grow/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<AfterLoginMain/>} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/mypage/chat" element={<MypageChat/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/grow" element={<Grow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
