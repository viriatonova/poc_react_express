const Cashout = () => {
    return (
        <div className="cash-out">
            <span>CashOut</span>
            <form action="">
                <fieldset className="w-full h-full flex flex-col">
                    <label>Username</label>
                    <input type="text" placeholder="Fred Nietzsche"/>
                </fieldset>
                <fieldset className="w-full h-full flex flex-col mt-6">
                    <label>Value</label>
                    <input type="text" placeholder="R$ 300"/>
                </fieldset>
                <button className="!h-16 btn-primary mt-12" type="submit">Send</button>
            </form>
            <h3 className="output">Output</h3>
            <p className="w-full h-full flex justify-center py-4">Output here</p>
        </div>
    );
}
 
export default Cashout;