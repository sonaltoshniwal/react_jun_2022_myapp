import ItemForm from "./ItemForm";
import "./NewItem.css";
const NewItem = (props) => {
  const saveItemDataHandler = (itemData) => {
    const item = { ...itemData, id: Math.random() };
    props.onAddItem(item);
  };
  return (
    <div className="new-item">
      <ItemForm onSaveItemData={saveItemDataHandler}></ItemForm>
    </div>
  );
};
export default NewItem;
