import Header from "../../components/common/header/mainHeader.jsx";
import { good } from "../../assets";
import { bad } from "../../assets";
import { comment } from "../../assets";
import { charactor1 } from "../../assets";
import "../mypage/index.css";
import { useNavigate } from "react-router-dom";

const Mypage = () => {

  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate("/mypage/chat");
  }

  return (
    <div>
      <Header />
      <div>
        <p style={question}>내 질문</p>
        { <p style={chatting} onClick={navigateToChat}>채팅</p> }
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
        <button style={buttonStyle}>
          프로필 변경
        </button>
        <button style={deleteStyle}>
          탈퇴하기
        </button>
      </div>
      <p style={profileName}>박휘응</p>
      <img src={charactor1} className="profileImg"/>
    </div>
  );
};

const box1 = {
  width: "850px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "200px",
  right: "200px",
  cursor: "pointer",
}

const box2 = {
  width: "850px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "280px",
  right: "200px",
  cursor: "pointer",
}

const box3 = {
  width: "850px",
  height: "45px",
  border: "1px solid",
  boxSizing: "borderBox",
  border: "0.5px solid #D9D9D9",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
  borderRadius: "10px",

  position: "absolute",
  top: "360px",
  right: "200px",
  cursor: "pointer",
}

const question = {
  color: "#362FD9",
  fontSize: "15px",
  position: "absolute",
  top: "150px",
  right: "1000px",
  cursor: "pointer",
}

const chatting = {
  fontSize: "15px",
  position: "absolute",
  top: "150px",
  right: "920px",
  cursor: "pointer",
}

const buttonStyle = {
  borderRadius: "7px",
  border: "1px solid",
  fontSize: "10px",
  fontWeight: "bold",
  color: "#6255F6",
  borderColor: "#6255F6",
  backgroundColor: "#FFFFFF",
  padding: "7px 15px",
  cursor: "pointer",

  position: "absolute",
  top: "370px",
  right: "1320px",
}

const deleteStyle = {
  borderRadius: "7px",
  border: "1px solid",
  fontSize: "10px",
  fontWeight: "bold",
  color: "#F65555",
  borderColor: "#F65555",
  backgroundColor: "#FFFFFF",
  padding: "7px 15px",
  cursor: "pointer",

  position: "absolute",
  top: "370px",
  right: "1230px",
}

const pBox = {
  fontSize: "15px",
  width: "300px",
  padding: "10px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  position: "absolute",
  top: "3px",
  left: "30px",
}

const name = {
  fontSize: "15px",
  position: "absolute",
  right: "400px",
  top: "11px",
}

const profileName = {
  fontSize: "18px",
  position: "absolute",
  left: "188px",
  top: "280px",
}

export default Mypage;