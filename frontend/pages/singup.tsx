import FormLogin from "../components/FormLogin"
import Link from "next/link"

const SingUp = () => {
    return (
        <main className="login">
            <section>
                <h1 className="mb-4 tracking-wide self-start text-3xl text-green-500">
                    First Time ? 
                </h1>
                <p className="mb-12 text-slate-100 text-left">
                    When register your account  will starts with 
                    <span className="ml-2 text-green-500 font-semibold">$ 100 !</span>
                </p>
                <FormLogin />
            </section>
        </main>
    )
}

export default SingUp
