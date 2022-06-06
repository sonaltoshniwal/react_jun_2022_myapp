import logo from "./logo.svg";
import "./App.css";
import ShoppingItem from "./components/ShoppingItem";
import Items from "./components/Items";

function App() {
  // const itemTitle="New title"
  const items = [
    {
      itmTitle: "Water Bottle",
      itmCost: 50,
      itmPurDate: new Date(2022, 3, 20),
    },
    {
      itmTitle: "Laptop",
      itmCost: 60000,
      itmPurDate: new Date(2021, 5, 22),
    },
    {
      itmTitle: "Marker",
      itmCost: 60,
      itmPurDate: new Date(2020, 6, 2),
    },
  ];

  return (
    <div>
     <Items items={items}></Items>
      {/* <ShoppingItem></ShoppingItem> */}
    </div>
  );
}

export default App;
