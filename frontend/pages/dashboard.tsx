import Balance from "../components/Balance";
import LastTransactions from "../components/LastTransaction/LastTransactions";

const Dashboard = () => {
    return (
        <main className="dash">
            <aside>
                <h2 
                className="
                mb-6 text-2xl font-semibold
                self-start
                "
                >Viriato Sampaio</h2>
                <Balance />
                <LastTransactions transactions={[]}/>
                <button className="btn-primary">Log Out</button>
            </aside>
            <section>ACCOUNT</section>
        </main>
    )
}
 
export default Dashboard;