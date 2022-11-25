import { IFormInputs } from '../components/FormLogin'

export const apiRegister = async (data: IFormInputs ) => {
    try {
        const url = 'http://0.0.0.0:52000/api/v1/register';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

export const apiLogin = async (data: IFormInputs ) => {
    try {
        const url = 'http://0.0.0.0:52000/api/v1/login';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}