import { IFormInputs } from '../components/FormLogin'

interface IFormCash {
    username: string
    token: string
}

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

export const apiTransaction = async ({username, token}: IFormCash) => {
    try {
        const url = `http://0.0.0.0:52000/api/v1/transaction?username=${username}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

export const apiUser = async ({username, token}: IFormCash) => {
    try {
        const url = `http://0.0.0.0:52000/api/v1/user?username=${username}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}
