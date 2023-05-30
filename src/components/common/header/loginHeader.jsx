import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  }

  return (
    <div>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <img src={logo} style={image} onClick={navigateToMain}/>
          <p style={pStyle} onClick={navigateToMain}>Grow</p>
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
  fontWeight: "bold",
  padding: "25px 760px",
  cursor: "pointer",
};

const image = {
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "20px",
  right: "800px",
  cursor: "pointer",
};

export default LoginHeader;
