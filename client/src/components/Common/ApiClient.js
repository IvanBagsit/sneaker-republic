import axios from "axios";

const client = axios.create({
    baseURL: "https://sneaker-republic-api.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
