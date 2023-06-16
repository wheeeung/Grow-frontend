import Category from "../../components/category/category.jsx";
import Header from "../../components/common/header/mainHeader.jsx";
import { good } from "../../assets";
import { bad } from "../../assets";
import { comment } from "../../assets";
import { background_main } from "../../assets";
import { charactor1 } from "../../assets";
import "../afterLogin/index.css";
import { useNavigate } from "react-router-dom";

const AfterLoginMain = () => {

  const navigate = useNavigate();

  const navigateTolist = () => {
    navigate("/ask/list")
  }

  const navigateToGrow = () => {
    navigate("/grow")
  }

  return (
    <div>
      <Header />
      <Category />
      <div>
        <p style={question}>질문</p>
        <div style={box1}>
          <div style={pBox}>
            디자인 알려주세요 제발료 진짜 모르겠어요 도와주세요
          </div>
          <p style={name}>- 박휘응</p>
          <img src={good} className="goodImg" />
          <img src={bad} className="badImg" />
          <img src={comment} className="commentImg" />
        </div>
        <div style={box2}>
          <div style={pBox}>
            디자인 알려주세요 제발료 진짜 모르겠어요 도와주세요
          </div>
          <p style={name}>- 박휘응</p>
          <img src={good} className="goodImg" />
          <img src={bad} className="badImg" />
          <img src={comment} className="commentImg" />
        </div>
        <div style={box3}>
          <div style={pBox}>
            디자인 알려주세요 제발료 진짜 모르겠어요 도와주세요
          </div>
          <p style={name}>- 박휘응</p>
          <img src={good} className="goodImg" />
          <img src={bad} className="badImg" />
          <img src={comment} className="commentImg" />
        </div>
        <button style={buttonStyle} onClick={navigateTolist}>
          더 많은 질문 보러가기
        </button>
      </div>
      <img src={background_main} className="mainImg" onClick={navigateToGrow} />
      <img src={charactor1} className="chImg"/>
    </div>
  );
};

const box1 = {
  width: "600px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "260px",
  right: "800px",
}

const box2 = {
  width: "600px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "340px",
  right: "800px",
}

const box3 = {
  width: "600px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "420px",
  right: "800px",
}

const question = {
  position: "absolute",
  top: "180px",
  right: "1070px",
}

const buttonStyle = {
  borderRadius: "7px",
  border: "1px solid",
  color: "#6255F6",
  borderColor: "#6255F6",
  backgroundColor: "#FFFFFF",
  padding: "9px 233px",
  cursor: "pointer",

  position: "absolute",
  top: "530px",
  right: "800px",
}

const pBox = {
  width: "160px",
  padding: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  position: "absolute",
  right: "430px",
}

const name = {
  position: "absolute",
  right: "340px",
  top: "10px",
}

export default AfterLoginMain;