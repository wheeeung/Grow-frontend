import Header from "../../components/common/header/mainHeader.jsx";
import "../write/index.css";
import { useNavigate } from "react-router-dom";
import Category from "../../components/category/category.jsx";

const Write = () => {

  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/ask/list");
  }

  return (
    <div>
      <Header />
      <Category />
      <p className="write">질문 작성</p>
      <button className="buttonStyle" onClick={navigateToList}>
        업로드
      </button>
      <textarea cols="10" rows="1" placeholder="제목을 입력해주세요" className="titleBox"></textarea>
      <textarea cols="200" rows="10" placeholder="내용을 입력해주세요" className="contentBox"></textarea>
    </div>
  );
};

export default Write;