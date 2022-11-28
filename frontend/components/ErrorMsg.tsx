interface IErrorProps {
    error: String
}

const ErrorMsg = ({error}: IErrorProps )=> {
    return (
        <p className="error-msg">{error}</p>
    );
}
 
export default ErrorMsg;