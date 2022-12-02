import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export type IFormDash = {
    username: string
    value: number
}

const onSubmit: SubmitHandler<IFormDash> = async (data) => {
    return console.log(data)
}

const Cashout = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormDash>();

    return (
        <div className="cash-out">
            <span>CashOut</span>
            <form action="">
                <fieldset className="w-full h-full flex flex-col">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder="Fred Nietzsche"
                        {...register("username", {
                            required: "Username ir required",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="username"
                        render={({ message }) => <p className="mt-1 text-red-400 tracking-wide">{message}</p>}
                    />
                </fieldset>
                <fieldset className="w-full h-full flex flex-col mt-6">
                    <label>Value</label>
                    <input 
                        type="text" 
                        placeholder="R$ 300"
                        {...register("value", {
                            required: "Value ir required",
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="username"
                        render={({ message }) => <p className="mt-1 text-red-400 tracking-wide">{message}</p>}
                    />
                </fieldset>
                <button className="!h-16 btn-primary mt-12" type="submit">Send</button>
            </form>
            {/* <h3 className="output">Output</h3>
            <p className="w-full h-full flex justify-center py-4">Output here</p> */}
        </div>
    );
}
 
export default Cashout;