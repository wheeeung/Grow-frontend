import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login/index.jsx";
import Signup from "./pages/signup/index.jsx";
import AfterLoginMain from "./pages/afterLogin/index.jsx";
import Mypage from "./pages/mypage/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<AfterLoginMain/>} />
        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
