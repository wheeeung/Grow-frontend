import "./header.css";
import { logo } from "../../../assets";
import { search } from "../../../assets";

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={logoStyle}>
            <img src={logo} style={image} />
            <p style={pStyle}>Grow</p>
          </div>
          <img src={search} style={rightImage} />
          <button style={buttonStyle}>로그인</button>
        </div>
      </header>
      <img src={logo} style={bodyImage} />
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#576CBC",
  width: "100vw",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const pStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  padding: "0 120px",
};

const logoStyle = {
  display: "flex",
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
  marginLeft: "auto",
  padding: "0 150px",
};

const buttonStyle = {
  padding: "5px 15px",
  borderRadius: "7px",
  border: "none",
  position: "absolute",
  top: "25px",
  right: "50px",
};

const bodyImage = {
  width: "400px",
  height: "400px",
  justifycontent: "center",
};

export default Header;
