import Header from "../../components/common/header/loginHeader.jsx";
import { logo } from "../../assets";
import "../login/index.css"

const Signup = () => {
  return (
    <div>
      <Header />
      <div style={mainBox}>
        <div style={box1} />
        <p style={pSytle}>회원가입</p>
        <img src={logo} style={logoStyle} />
        <form>
          <input type="email" style={loginInput} placeholder="이메일을 입력해주세요" autoFocus />
          <input type="password" style={passInput} placeholder="비밀번호을 입력해주세요" />
          <input type="text" style={nameInput} placeholder="닉네임을 입력해주세요" />
          <button style={button}>회원가입</button>
        </form>
      </div>
    </div>  
  );
};

const box1 = {
  position: "absolute",
  width: "520px",
  height: "550px",
  left: "0px",
  top: "0px",

  background: "#19376D",
  borderRadius: "23px 0px 0px 23px",
};

const mainBox = {
  position: "absolute",
  width: "1136px",
  height: "550px",
  left: "195px",
  top: "110px",

  background: "#FFFFFF",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
  borderRadius: "25px",
}

const pSytle = {
  position: "absolute",
  left: "770px",
  top: "100px",

  fontFamily: "'Inter'",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "25px",
  lineHeight: "29px",

  color: "#000000",
}

const logoStyle = {
  width: "300px",
  height: "300px",
  position: "absolute",
  top: "130px",
  right: "730px",
}

const loginInput = {
  width: "30.5%",
  position: "absolute",
  top: "200px",
  right: "140px",
  padding: "10px",

  borderBottom: "1px solid",
}

const passInput = {
  width: "30.5%",
  position: "absolute",
  top: "270px",
  right: "140px",
  padding: "10px",

  borderBottom: "1px solid",
}

const nameInput = {
  width: "30.5%",
  position: "absolute",
  top: "340px",
  right: "140px",
  padding: "10px",

  borderBottom: "1px solid",
}

const button = {
  position: "absolute",
  width: "350px",
  height: "40px",
  left: "650px",
  top: "410px",
  cursor: "pointer",

  background: "#A5D7E8",
}

export default Signup;
