import { ICard } from "./Transfers";

const TransfersCard = ({name, currency, date}: ICard) => {
    return (
        <li className="transfers-card">
            <ul>{name}</ul>
            <ul>{currency}</ul>
            <ul>{date}</ul>
        </li>
    );
}
 
export default TransfersCard;