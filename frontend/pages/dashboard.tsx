import { useState } from "react";
import Balance from "../components/Balance";
import Transfers from "../components/Transfers/Transfers";
import Cashout from "../components/Cashout";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

let today = new Date();
let currentDate = `${today.getDate()} - ${(today.getMonth()+1)} - ${today.getFullYear()}`;

const Dashboard = () => {
    const [date] = useState(currentDate)
    const { data: session, status } = useSession();

    return (
        <main className="dash">
            <div className="dash-wrapper">
                <header className="dash-header">
                    <span className="w-full h-auto text-left mb text-2xl">Olá, {session && JSON.stringify(session?.user.name.id, null, 4)}</span>
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
                        <Balance />
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