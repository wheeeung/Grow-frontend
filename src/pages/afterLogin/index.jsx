import Category from "../../components/category/category.jsx";
import Header from "../../components/common/header/mainHeader.jsx";
import { Good } from "../../assets/good.svg";
import { Bad } from "../../assets/bad.svg";
import { Comment } from "../../assets/comment.svg";
import { arrow } from "../../assets/arrow.svg";

const AfterLoginMain = () => {
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
        </div>
        <div style={box2}>
          <div style={pBox}>
            디자인 알려주세요 제발료 진짜 모르겠어요 도와주세요
          </div>
          <p style={name}>- 박휘응</p>
        </div>
        <div style={box3}>
          <div style={pBox}>
            디자인 알려주세요 제발료 진짜 모르겠어요 도와주세요
          </div>
          <p style={name}>- 박휘응</p>
        </div>
        <button style={buttonStyle}>
          더 많은 질문 보러가기
        </button>
      </div>
    </div>
  );
};

const box1 = {
  width: "500px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "240px",
  right: "900px",
}

const box2 = {
  width: "500px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "320px",
  right: "900px",
}

const box3 = {
  width: "500px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "400px",
  right: "900px",
}

const question = {
  position: "absolute",
  top: "180px",
  right: "1150px",
}

const buttonStyle = {
  borderRadius: "7px",
  border: "1px solid",
  color: "#6255F6",
  borderColor: "#6255F6",
  backgroundColor: "#FFFFFF",
  padding: "9px 180px",
  cursor: "pointer",

  position: "absolute",
  top: "500px",
  right: "900px",
}

const pBox = {
  width: "160px",
  padding: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  position: "absolute",
  right: "330px",
}

const name = {
  position: "absolute",
  right: "260px",
  top: "10px",
}

export default AfterLoginMain;