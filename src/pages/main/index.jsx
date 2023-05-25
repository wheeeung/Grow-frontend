import Header from "../../components/common/header/header.jsx";
import { logo } from "../../assets";

const Main = () => {
  return (
    <div>
      <Header />
      <img src={logo} style={bodyImage} />
      <button style={buttonStyle}>로그인하고 오정수키우기</button>
    </div>
      
  );
};

const bodyImage = {
  width: "300px",
  height: "300px",
  position: "absolute",
  top: "150px",
  right: "640px",
};

const buttonStyle = {
  borderRadius: "7px",
  border: "1px solid",
  color: "#6255F6",
  borderColor: "#6255F6",
  backgroundColor: "#FFFFFF",
  padding: "7px 80px",

  position: "absolute",
  top: "500px",
  right: "630px",
}

export default Main;
