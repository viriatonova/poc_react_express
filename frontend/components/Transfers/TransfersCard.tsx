import { ICard } from "./Transfers";

const TransfersCard = ({currency, date, credited}: ICard) => {
    return (
        <ul className="transfers-card">
            <li>{currency}</li>
            <li>{date}</li>
            <li>{credited}</li>
        </ul>
    );
}
 
export default TransfersCard;