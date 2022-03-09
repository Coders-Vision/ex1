import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL;
export const AUTH_TOKEN = localStorage.getItem("token");

const config = {
  baseURL: BASE_URL,
  headers: {
    ["Authorization"]: `bearer ${AUTH_TOKEN}`,
  },
};

const serverCall = axios.create(config);

//Calling endpoints using 'axios' to avoid header overwrite .
export const signIn = (signInData) =>
  axios.post(`${BASE_URL}auth/local`, signInData);
export const getItems = () => serverCall.get(`${BASE_URL}item-requests`);
export const getItemById = (item_id) =>
serverCall.get(`${BASE_URL}item-requests/${item_id}`);
