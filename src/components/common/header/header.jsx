import { logo } from "../../../assets";
import { search } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
 
  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToMain = () => {
    navigate("/");
  }

  return (
    <div>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={logoStyle}>
            <img src={logo} style={image} onClick={navigateToMain}/>
            <p style={pStyle} onClick={navigateToMain}>Grow</p>
          </div>
          <img src={search} style={rightImage} />
          <button style={loginStyle} onClick={navigateToLogin}>
            로그인
          </button>
        </div>
      </header>
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#576CBC",
  height: "80px"
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const pStyle = {
  fontSize: "20px",
  padding: "25px 130px",
  cursor: "pointer",

  fontFamily: "'Inter'",
  fontStyle: "normal",
};

const logoStyle = {
  display: "flex",
  cursor: "pointer",
};

const image = {
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "20px",
  right: "1430px",
};

const rightImage = {
  width: "25px",
  height: "25px",
  position: "absolute",
  right: "130px",
  cursor: "pointer",
};

const loginStyle = {
  padding: "5px 15px",
  borderRadius: "7px",
  border: "none",
  position: "absolute",
  top: "25px",
  right: "50px",
  cursor: "pointer",
};

export default Header;
