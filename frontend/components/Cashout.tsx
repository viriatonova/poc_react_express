const Cashout = () => {
    return (
        <article className="cash-out">
            <span>CashOut</span>
            <form action="">
                <fieldset className="">
                    <input type="text" placeholder="Fred Nietzsche"/>
                </fieldset>
                <fieldset className="">
                    <input type="text" placeholder="R$ 300"/>
                </fieldset>
                <button className="btn-primary" type="submit">Send</button>
            </form>
        </article>
    );
}
 
export default Cashout;