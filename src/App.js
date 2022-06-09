import "./App.css";
import Items from "./components/Items";
import NewItem from "./components/NewItem/NewItem";
import { useState } from "react";
const items_initial = [
  {
    id: "e1",
    itmTitle: "Water Bottle",
    itmCost: 50,
    itmPurDate: new Date(2022, 3, 20),
  },
  {
    id: "e2",
    itmTitle: "Laptop",
    itmCost: 60000,
    itmPurDate: new Date(2021, 5, 22),
  },
  {
    id: "e3",
    itmTitle: "Marker",
    itmCost: 60,
    itmPurDate: new Date(2020, 6, 2),
  },
];
const App = () => {
  const [items, setItems] = useState(items_initial);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div>
      <NewItem onAddItem={addItemHandler}></NewItem>
      <Items items={items}></Items>
      {/* <ShoppingItem></ShoppingItem> */}
    </div>
  );
};

export default App;
