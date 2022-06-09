import DateFilter from "./DateFilter";
import "./Items.css";
import ShoppingItem from "./ShoppingItem";
import Card from "./UI/Card";
const Items = (props) => {
  const items = props.items;
  return (
    <Card className="items">
      <DateFilter></DateFilter>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          itemTitle={item.itmTitle}
          itemCost={item.itmCost}
          itemPurchaseDate={item.itmPurDate}
        ></ShoppingItem>
      ))}
      {/* <ShoppingItem itemTitle={items[0].itmTitle}
        itemCost={items[0].itmCost}
        itemPurchaseDate={items[0].itmPurDate}></ShoppingItem>
        
        <ShoppingItem itemTitle={items[1].itmTitle}
        itemCost={items[1].itmCost}
        itemPurchaseDate={items[1].itmPurDate}></ShoppingItem> */}
    </Card>
  );
};
export default Items;
