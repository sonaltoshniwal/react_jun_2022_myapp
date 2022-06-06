import PurchaseDate from "./PurchaseDate";
import "./ShoppingItem.css";
import Card from "./UI/Card";

function ShoppingItem(props)
{
    // const itemTitle=props.itemTitle;
    // const itemCost=props.itemCost;
    // const itemPurchaseDate=props.itemPurchaseDate;
  
    
    return (
        <Card className="shopping-item">
        <div> <h2>{props.itemTitle}</h2></div>
        <div className="shopping-item_cost">{props.itemCost}</div>
        <div className="shopping-item_date">
            <PurchaseDate itemPurchaseDate={props.itemPurchaseDate}>
        
            </PurchaseDate>
            </div>
        </Card>
    )
}
export default ShoppingItem;