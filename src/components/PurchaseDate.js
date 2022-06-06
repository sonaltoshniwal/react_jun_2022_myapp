import "./PurchaseDate.css";

function PurchaseDate(props)
{
    const day=props.itemPurchaseDate.getDate();
    const year=props.itemPurchaseDate.getFullYear();
    const month=props.itemPurchaseDate.toLocaleString(
        "en-US",{month:"long"});
    return (
        <div className="purchase-date">
            <div className="purchase-date__day">{day}</div>
            <div className="purchase-date__month">{month}</div>
            <div className="purchase-date__year">{year}</div>
        </div>
    )
}
export default PurchaseDate;