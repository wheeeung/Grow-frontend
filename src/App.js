import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
