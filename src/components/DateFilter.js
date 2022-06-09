import "./DateFilter.css";
const DateFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="date-filter">
      <div className="date-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};
export default DateFilter;
