import { useState } from "react";
import PurchaseDate from "./PurchaseDate";
import "./ShoppingItem.css";
import Card from "./UI/Card";

const ShoppingItem = (props) => {
  //let itemTitle=props.itemTitle;
  // const itemCost=props.itemCost;
  // const itemPurchaseDate=props.itemPurchaseDate;

  const [itemTitle, setItemTitle] = useState(props.itemTitle);
  function clickHandler() {
    setItemTitle("New Title");
  }
  return (
    <Card className="shopping-item">
      <div>
        <h2>{itemTitle}</h2>
      </div>
      <div className="shopping-item_cost">{props.itemCost}</div>
      <div className="shopping-item_date">
        <PurchaseDate itemPurchaseDate={props.itemPurchaseDate}></PurchaseDate>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ShoppingItem;
