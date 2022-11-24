import FormLogin from "../components/FormLogin"
import Link from "next/link"

const SingUp = () => {
    return (
        <main className="login">
            <section>
                <h1 className="login-title text-center tracking-wide text-3xl">
                    Register
                </h1>
                <FormLogin />
            </section>
        </main>
    )
}

export default SingUp
