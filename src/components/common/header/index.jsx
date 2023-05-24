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
          <button style={loginStyle}>로그인</button>
        </div>
      </header>
      <img src={logo} style={bodyImage} />
      <button style={buttonStyle}>로그인하고 오정수키우기</button>
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
  padding: "25px 130px",
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

const loginStyle = {
  padding: "5px 15px",
  borderRadius: "7px",
  border: "none",
  position: "absolute",
  top: "25px",
  right: "50px",
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
  color: "#6255F6",
  borderColor: "#6255F6",
  background: "#FFFFF",
  padding: "7px 80px",

  position: "absolute",
  top: "500px",
  right: "630px",
}

export default Header;
