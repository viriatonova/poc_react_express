import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react"
import TransfersCard from "./TransfersCard";
import { apiTransaction } from "../../service/apiRequests";

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


const Transfers = () => {
    const { data: session, status } = useSession();
    const [transactions, setTranssactions] = useState([])

    const handleTransactions = useCallback( async () => {
        const db_transactions = await apiTransaction({
            username: session?.user?.name.username,
            token: session?.user?.name.accessToken
        })
        return db_transactions
    }, [session])

    useEffect(()=>{
        handleTransactions().then((data) => {
            setTranssactions(data)
        })
    },[handleTransactions])

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