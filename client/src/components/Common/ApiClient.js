import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3500",
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
