import Header from "../../components/common/header/mainHeader.jsx";
import { good } from "../../assets";
import { bad } from "../../assets";
import { comment } from "../../assets";
import { plus } from "../../assets"
import "../askList/index.css";
import { useNavigate } from "react-router-dom";
import Category from "../../components/category/category.jsx";

const AskList = () => {

  const navigate = useNavigate();

  const navigateToWrite = () => {
    navigate("/ask/write");
  }

  const navigateToPost = () => {
    navigate("/ask/post");
  }


  return (
    <div>
      <Header />
      <Category />
      <div>
        <div className="ask1" onClick={navigateToPost}>
          <div className="pBox">
            디자인 알려주세요 
          </div>
          <p className="content">피그마 각각의 객체들 그룹화 단축키 알려주세요.</p>
          <img src={good} className="good" />
          <p className="num1">10</p>
          <img src={bad} className="bad" />
          <p className="num2">1</p>
          <img src={comment} className="comment" />
          <p className="num3">3</p>
        </div>
        <div className="ask2" onClick={navigateToPost}>
          <div className="pBox">
            디자인 알려주세요 
          </div>
          <p className="content">피그마 각각의 객체들 그룹화 단축키 알려주세요.</p>
          <img src={good} className="good" />
          <p className="num1">10</p>
          <img src={bad} className="bad" />
          <p className="num2">1</p>
          <img src={comment} className="comment" />
          <p className="num3">3</p>
        </div>
        <div className="ask3" onClick={navigateToPost}>
          <div className="pBox">
            디자인 알려주세요
          </div>
          <p className="content">피그마 각각의 객체들 그룹화 단축키 알려주세요.</p>
          <img src={good} className="good" />
          <p className="num1">10</p>
          <img src={bad} className="bad" />
          <p className="num2">1</p>
          <img src={comment} className="comment" />
          <p className="num3">3</p>
        </div>
      </div>
      <img src={plus} className="plus" onClick={navigateToWrite} />
    </div>
  );
};

export default AskList;