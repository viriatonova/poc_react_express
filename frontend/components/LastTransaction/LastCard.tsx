import { ICard } from "./LastTransactions";

const LastCard = ({name, currency, date}: ICard) => {
    return (
        <li className="last-card">
            <ul>{name}</ul>
            <ul>{currency}</ul>
            <ul>{date}</ul>
        </li>
    );
}
 
export default LastCard;