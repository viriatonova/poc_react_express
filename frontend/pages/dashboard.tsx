import { useState, useCallback, useEffect } from "react";
import Balance from "../components/Balance";
import Transfers from "../components/Transfers/Transfers";
import Cashout from "../components/Cashout";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { apiUser } from "../service/apiRequests"
import { useRouter } from 'next/router';


let today = new Date();
let currentDate = `${today.getDate()} - ${(today.getMonth()+1)} - ${today.getFullYear()}`;

const Dashboard = () => {
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState([])
    const [date] = useState(currentDate)
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleUser = useCallback( async () => {
        const db_transactions = await apiUser({
            // @ts-ignore: Unreachable code error
            username: session?.user?.name,
            // @ts-ignore: Unreachable code error
            token: session?.user?.accessToken
        })
        return db_transactions
    }, [session])

    useEffect(() => {
        if (status === "authenticated") {
            handleUser().then((data) => {
                setUserData(data)
            } )
        }
    },[handleUser, session, status])    

    console.log(session, status)
    return (
        <main className="dash">
            <div className="dash-wrapper">
                <header className="dash-header">
                    <span className="dash-user">Olá, 
                        <h2 className="">{session && session?.user?.name }</h2>
                    </span>
                    <span className="w-1/3 h-auto text-right">{date}</span>
                    <button 
                        className="w-1/5 btn-primary" 
                        onClick={() => signOut({
                            redirect: true,
                            callbackUrl: "/"
                        })}
                    >Log out</button>
                </header>
                <section className="dash-transaction">
                    <article className="w-[30rem] user-clip">
                        <Balance currency={
                            userData.map((data)=>{
                                // @ts-ignore: Unreachable code error
                                return data.account.balance
                            })
                        }/>
                        <Cashout />
                    </article>
                    <article className="w-full user-clip">
                        <Transfers />
                    </article>
                </section>
            </div>
        </main>
    )
}
 
export default Dashboard;