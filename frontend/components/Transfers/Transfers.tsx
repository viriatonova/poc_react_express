import { useContext } from "react";
// import { TransfersContext } from "../../context/TransferContext";
import TransfersCard from "./TransfersCard";

export type ICard = {
    id?: number;
    currency: number;
    date: string;
    name: string;
};

export type ICardItems = {
    transactions: ICard[] | any
    // state: {}
}


const Transfers = ({transactions}: ICardItems) => {
    // const { state } = useContext(TransfersContext)
    return (
        <div className="transfers">
            <input className="search-transfer" type="text" />
            <article className="transfer-table">
                {
                    transactions?.map((transaction: ICard) => (
                        <TransfersCard 
                            key={transaction.id}
                            name={transaction.name}
                            currency={transaction.currency}
                            date={transaction.date}
                        />
                    ))
                }
            </article>
        </div>
    );
}
 
export default Transfers;