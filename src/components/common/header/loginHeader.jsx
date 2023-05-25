import { logo } from "../../../assets";

const LoginHeader = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <img src={logo} style={image} />
          <p style={pStyle}>Grow</p>
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
};

const image = {
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "20px",
  right: "800px",
};

export default LoginHeader;
