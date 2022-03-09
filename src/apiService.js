import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL;
export const AUTH_TOKEN = localStorage.getItem("token");

const config = {
  baseURL: BASE_URL,
  headers: {
    ["bearer"]: AUTH_TOKEN,
  },
};

const serverCall = axios.create(config);

//Calling endpoints using 'axios' to avoid header overwrite .
export const signIn = (signInData) =>
  axios.post(`${BASE_URL}auth/local`, signInData);


// //Calling endpoints by Instance of axios,'serverCall' for every CRUD Operation.
// export const fetchProducts = () => serverCall.get(`/api/products`);
// export const fetchProductByID = (productID) =>
//   serverCall.get(`/api/products/${productID}`);
// export const saveProduct = (addedProduct) =>
//   serverCall.post(`/api/products`, addedProduct);
// export const changeProduct = (productID, updatedProduct) =>
//   serverCall.put(`/api/products/${productID}`, updatedProduct);
// export const removeProduct = (productID) =>
//   serverCall.delete(`/api/products/${productID}`);
