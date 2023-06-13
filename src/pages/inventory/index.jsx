import Header from "../../components/common/header/mainHeader.jsx";
import "../inventory/index.css";
import { useNavigate } from "react-router-dom";
import { inventory_background } from "../../assets";
import { inventory } from "../../assets";
import { store } from "../../assets";
import { home } from "../../assets";
import { money } from "../../assets";
import { background_buy } from "../../assets";
import { item1 } from "../../assets";
import { charactor2 } from "../../assets";
import { useState } from "react";


const Inventory = () => {
  const navigate = useNavigate();

  const [cnt, setMoney] = useState(0);

  const navigateToStore = () => {
    navigate("/store");
  };

  const navigateToGrow = () => {
    navigate("/grow");
  };

  return (
    <div>
      <Header />
      <img src={inventory} className="inventoryStyle" />
      <img src={home} className="homeStyle" onClick={navigateToGrow} />
      <img src={store} className="storeStyle" onClick={navigateToStore} />

      <div>
        <img src={inventory_background} className="background" />
        <img src={money} className="money" />
        <p className="moneyCnt">{cnt}</p>
        <div className="item1">
          <p className="p1">배경화면</p>
          <img src={background_buy} className="img1" />
          <button className="buyButton">착용하기</button>
        </div>
        <div className="item2">
          <p className="p1">아이템</p>
          <img src={item1} className="img2" />
          <button className="buyButton">착용하기</button>
        </div>
        <div className="item3">
          <p className="p1">캐릭터</p>
          <img src={charactor2} className="img2" />
          <button className="buyButton">착용하기</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;