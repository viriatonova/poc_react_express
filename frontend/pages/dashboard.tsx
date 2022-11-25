import Balance from "../components/Balance";
import LastTransactions from "../components/LastTransaction/LastTransactions";
import Cashout from "../components/Cashout";

const Dashboard = () => {
    return (
        <main className="dash">
            <section>
                <article className="user-clip">
                    <Balance />
                    <Cashout />
                    <div className="w-1/3 h-full px-4 flex flex-col justify-start items-center space-y-2">
                        <span className="w-full h-auto text-center mb text-2xl">Viriato Sampaio</span>
                        <button className="btn-primary" type="submit">Log out</button>
                    </div>
                </article>
                <LastTransactions transactions={[]}/>
            </section>
        </main>
    )
}
 
export default Dashboard;