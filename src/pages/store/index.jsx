import Header from "../../components/common/header/mainHeader.jsx";
import "../store/index.css";
import { useNavigate } from "react-router-dom";
import { store_background } from "../../assets";
import { inventory } from "../../assets";
import { store } from "../../assets";
import { home } from "../../assets";
import { money } from "../../assets";
import { background_buy } from "../../assets";
import { item1 } from "../../assets";
import { charactor2 } from "../../assets";


const Store = () => {

  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate("/inventory");
  }
  
  const navigateToGrow = () => {
    navigate("/grow");
  }

  return (
    <div>
      <Header />
       <img src={inventory} className="inventoryStyle" onClick={navigateToInventory}/>
      <img src={home} className="homeStyle" onClick={navigateToGrow}/>
      <img src={store} className="storeStyle"/>
      
      <div>
        <img src={store_background} className="background"/>
        <img src={money} className="moneyStyle"/>
        <p className="moneyCnt">0</p>
        <img src={store} className="storeLogo"/>
        <div className="item1">
          <p className="p1">배경화면</p>
          <img src={background_buy} className="img1" />
          <button className="buyButton">
            구입하기
          </button>
        </div>
        <div className="item2">
          <p className="p1">아이템</p>
          <img src={item1} className="img2" />
          <button className="buyButton">
            구입하기
          </button>
        </div>
        <div className="item3">
          <p className="p1">캐릭터</p>
          <img src={charactor2} className="img2" />
          <button className="buyButton">
            구입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Store;