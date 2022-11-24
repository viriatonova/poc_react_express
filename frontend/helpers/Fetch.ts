type getFetch = {
    url: string,
    method: string,
    token: string | null,
    body: {} | null
}

const FetchNg = async (
    { url, method, token, body } : getFetch
) => {
    try {
        const api = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            mode: "no-cors",
            method: method,
            body: JSON.stringify(body)
        })
        const response = await api
        const data = await response.json();
        return data
    } catch (err) {
        console.log(err)
    }
}

export default FetchNg