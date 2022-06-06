import "./Items.css";
import ShoppingItem from "./ShoppingItem";
import Card from "./UI/Card";
function Items(props)
{
   const items=props.items;
    return (
        <Card className="items">
        <ShoppingItem itemTitle={items[0].itmTitle}
        itemCost={items[0].itmCost}
        itemPurchaseDate={items[0].itmPurDate}></ShoppingItem>
        
        <ShoppingItem itemTitle={items[1].itmTitle}
        itemCost={items[1].itmCost}
        itemPurchaseDate={items[1].itmPurDate}></ShoppingItem>
        </Card>
    )
}
export default Items;