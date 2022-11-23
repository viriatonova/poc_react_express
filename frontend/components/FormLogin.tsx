import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from 'next/router';

interface IFormInputs {
    username: string
    password: string
}

const FormLogin = () => {
    const router = useRouter();
    const {register, formState: { errors }, handleSubmit,} = useForm<IFormInputs>();
    const onSubmit = (data: IFormInputs) => {
        data.username = data?.username.replace(/\s/g, '').trim()
        router.push('dashboard')
        console.log(data)
        return data
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="" action="POST">
            <fieldset className="input-text">
                <input
                    className="w-full"
                    type="text"
                    placeholder="joao dos santos"
                    {...register("username", {
                        required: "Username ir required",
                    })}
                />
                <label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </label>
                <ErrorMessage
                    errors={errors}
                    name="username"
                    render={({ message }) => <p className="mt-1 text-red-400 tracking-wide">{message}</p>}
                />
            </fieldset>
            <fieldset className="input-text">
                <input
                    className="w-full"
                    type="password"
                    {...register("password", {
                        required: "Password ir required",
                    })}
                />
                <label htmlFor="password">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>

                </label>
                <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p className="mt-1 text-red-400 tracking-wide">{message}</p>}
                />
            </fieldset>
            <button className="btn-primary" type="submit">Entrar</button>
        </form>
    )
}

export default FormLogin