import { useState } from "react";
import "./ItemForm.css";
const ItemForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCost, setEnteredCost] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({...userInput,enteredTitle:event.target.value})
    //  setUserInput((prevState)=>{
    //      return  {...prevState,enteredTitle:event.target.value}});

    //console.log(userInput);
  };
  const costChangeHandler = (event) => {
    setEnteredCost(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const saveItemHandler = (event) => {
    event.preventDefault();
    const itemData = {
      itmTitle: enteredTitle,
      itmCost: enteredCost,
      itmPurDate: new Date(enteredDate),
    };
    props.onSaveItemData(itemData);
    //console.log(itemData);
    setEnteredTitle("");
    setEnteredCost("");
    setEnteredDate("");
    //  console.log(enteredTitle);
    // console.log(enteredCost);
    // console.log(enteredDate);
  };
  return (
    <form onSubmit={saveItemHandler}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-item__control">
          <label>Cost</label>
          <input
            type="number"
            min="10"
            max="1000000"
            onChange={costChangeHandler}
            value={enteredCost}
          />
        </div>
        <div className="new-item__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-item__actions">
        <button>Add Item</button>
      </div>
    </form>
  );
};
export default ItemForm;
