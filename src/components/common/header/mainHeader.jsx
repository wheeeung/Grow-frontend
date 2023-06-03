import { logo } from "../../../assets";
import { search } from "../../../assets";
import { user } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/main");
  }

  const navigateToMypage = () => {
    navigate("/mypage");
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
          <img src={user} style={userImage} onClick={navigateToMypage}/>
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

const userImage = {
  width: "27px",
  height: "27px",
  position: "absolute",
  right: "60px",
  cursor: "pointer",
}

export default Header;
