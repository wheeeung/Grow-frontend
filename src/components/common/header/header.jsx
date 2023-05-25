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

export default Header;
