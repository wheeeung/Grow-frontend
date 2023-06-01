import Header from "../../components/common/header/header.jsx";
import { logo } from "../../assets";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
 
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <img src={logo} style={bodyImage} />
      <button style={buttonStyle} onClick={navigateToLogin}>
        로그인하고 시작하기
      </button>
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
  cursor: "pointer",

  position: "absolute",
  top: "500px",
  right: "630px",
}

export default Main;
