import Header from "../../components/common/header/mainHeader.jsx";
import { useNavigate } from "react-router-dom";
import { inventory } from "../../assets";
import { store } from "../../assets";
import { home } from "../../assets";
import { charactor1 } from "../../assets";
import "../grow/index.css"

const Grow = () => {
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate("/inventory");
  };

  const navigateToStore = () => {
    navigate("/store");
  };

  return (
    <div>
      <Header />
      <img src={inventory} className="inventoryStyle" onClick={navigateToInventory} />
      <img src={home} className="homeStyle" />
      <img src={store} className="storeStyle" onClick={navigateToStore} />

      <div className="box">
        <img src={charactor1} className="img1" />
      </div>
    </div>
  );
};

export default Grow;