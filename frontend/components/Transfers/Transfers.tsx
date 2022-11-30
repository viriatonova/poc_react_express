import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react"
import TransfersCard from "./TransfersCard";
import { apiTransaction } from "../../service/apiRequests";

export type ICard = {
    id?: number;
    currency: number | string;
    date: string;
    name?: string;
    credited: number | string
};

export type ICardItems = {
    id: number | null | undefined;
    currency: number,
    debitedAccount: number | any,
    createdAt: string | any
}

type Fake = {
    id: string,
    name: string,
    year: string,
    color: string
    pantone_value: string
}


const Transfers = () => {
    const { data: session, status } = useSession();
    const [transactions, setTranssactions] = useState([])

    const handleJSON = useCallback( async () => {
        const posts = await fetch(`https://reqres.in/api/unknown`)
        const filterdPosts = await posts.json()
        return filterdPosts.data
    }, [])

    const handleTransactions = useCallback( async () => {
        const db_transactions = await apiTransaction({
            username: session?.user?.name.username,
            token: session?.user?.name.accessToken
        })
        return db_transactions
    }, [session])

    useEffect(()=>{
        handleJSON().then((data) => {
            setTranssactions(data)
        })
    },[handleJSON])

    console.log(transactions)
    return (
        <div className="transfers">
            <input className="search-transfer" type="text" />
            <article className="transfer-table">
                {
                    transactions?.map((transaction: Fake) => (
                        <TransfersCard 
                            key={transaction.id}
                            currency={transaction.name}
                            credited={transaction.year}
                            date={transaction.pantone_value}
                        />
                    ))
                }
            </article>
        </div>
    );
}
 
export default Transfers;