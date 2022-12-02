type CurrencyProp = {
    currency: number | any
}
const Balance = ({currency}:CurrencyProp) => {
    return (
        <div className="balance">
            <p>Account Balance</p>
            <h2 className="text-4xl font-bold text-green-700">{`R$ ${currency}`}</h2>
        </div>
    );
}
 
export default Balance;