import "./category.css";

const Category = () => {
  return (
    <header style={box}>
      <div style={containerStyle}>
        <p className="hover-effect" style={pStyle}>전체</p>
        <p className="hover-effect" style={pStyle}>개발</p>
        <p className="hover-effect" style={pStyle}>수학</p>
        <p className="hover-effect" style={pStyle}>영어</p>
        <p className="hover-effect" style={pStyle}>일상</p>
      </div>
    </header>
  );
};

const box = {
  height: "60px",
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), #FFFFFF",
  boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 0",
};

const pStyle = {
  padding: "0 60px",
}

export default Category;