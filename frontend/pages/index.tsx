import FormLogin from "../components/FormLogin"
import Link from "next/link"

const Home = () => {
    return (
        <main className="login">
            <section>
                <h1 className="login-title">
                    <span className="text-green-500 font-bold mr-4 text-3xl">NG.Cash</span> 
                    Internal Exchange
                </h1>
                <FormLogin />
                <p className="mt-6 text-lg text-slate-300">
                    Don't have Account? 
                    <Link 
                        className="text-green-500 ml-2 font-semibold hover:text-purple-300"
                        href={'/singup'}>Sing up
                    </Link>
                </p>
            </section>
        </main>
    )
}

export default Home
