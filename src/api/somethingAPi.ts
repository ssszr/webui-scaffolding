import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
});

export function somethingTest(msg: string) {
    return httpClient.get(`/test/${msg}`)
}