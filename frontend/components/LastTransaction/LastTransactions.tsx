import LastCard from "./LastCard";

export type ICard = {
    id?: number;
    currency: number;
    date: string;
    name: string;
};

export type ICardItems = {
    transactions: ICard[] | undefined
}


const LastTransactions = ({transactions}: ICardItems) => {
    return (
        <div className="last-transfer">
            {
                transactions?.map((transaction: ICard) => (
                    <LastCard 
                        key={transaction.id}
                        name={transaction.name}
                        currency={transaction.currency}
                        date={transaction.date}
                    />
                ))
            }
        </div>
    );
}
 
export default LastTransactions;