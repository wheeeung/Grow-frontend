import Header from "../../../components/common/header/mainHeader.jsx";
import { charactor1 } from "../../../assets";
import { charactor2 } from "../../../assets";
import "../chat/index.css";
import { useNavigate } from "react-router-dom";

const MypageChat = () => {

  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate("/mypage");
  }

  return (
    <div>
      <Header />
      <div>
        <p style={question} onClick={navigateToChat}>내 질문</p>
        <p style={chatting}>채팅</p>
        <div className="box1">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
        </div>
        <div className="box2">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
        </div>
        <div className="box3">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
        </div>
        <div className="box4">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
        </div>
        <div className="box5">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
        </div>
        <div className="box6">
          <p style={name}>황진성</p>
          <img src={charactor2} style={chatImg} />
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

const question = {
  fontSize: "15px",
  position: "absolute",
  top: "150px",
  right: "1000px",
  cursor: "pointer",
}

const chatting = {
  color: "#362FD9",
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

const name = {
  fontSize: "15px",
  position: "absolute",
  top: "190px",
  right: "110px",
}

const profileName = {
  fontSize: "18px",
  position: "absolute",
  left: "170px",
  top: "280px",
}

const chatImg = {
  width: "90px",
  position: "absolute",
  top: "60px",
  right: "90px",
}

export default MypageChat;