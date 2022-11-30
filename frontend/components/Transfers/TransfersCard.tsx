import { ICard } from "./Transfers";

const TransfersCard = ({currency, date, credited}: ICard) => {
    return (
        <ul className="transfers-card">
            <li className="!w-1/3 !px-0">{credited}</li>
            <li>{currency}</li>
            <li>{date}</li>
        </ul>
    );
}
 
export default TransfersCard;