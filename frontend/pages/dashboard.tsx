import { useState } from "react";
import Balance from "../components/Balance";
import Transfers from "../components/Transfers/Transfers";
import Cashout from "../components/Cashout";

let today = new Date();
let currentDate = `${today.getDate()} - ${(today.getMonth()+1)} - ${today.getFullYear()}`;

const Dashboard = () => {
    const [date] = useState(currentDate)
    return (
        <main className="dash">
            <div className="dash-wrapper">
                <header className="dash-header">
                    <span className="w-full h-auto text-left mb text-2xl">Olá, Viriato Sampaio</span>
                    <span className="w-1/3 h-auto text-right">{date}</span>
                    <button className="w-1/5 btn-primary" type="submit">Log out</button>
                </header>
                <section className="dash-transaction">
                    <article className="w-[30rem] user-clip">
                        <Balance />
                        <Cashout />
                    </article>
                    <article className="w-full user-clip">
                        <Transfers transactions={[]}/>
                    </article>
                </section>
            </div>
        </main>
    )
}
 
export default Dashboard;