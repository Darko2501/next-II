export default async function handler(req, res) {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
        }),
    });

    const data = await response.json();
    res.status(200).json(data);
}