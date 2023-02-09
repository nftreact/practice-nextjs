import axios from "axios";

export const ApiManager = axios.create({
    baseURL: "https://dummyjson.com/",
});

export const RemasBaseUrl = axios.create({
    baseURL: "https://api.remasgallery.com/"
});