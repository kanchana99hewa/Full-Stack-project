import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => await API.post("/user/signup", data);
export const UserSignIn = async (data) => await API.post("/user/signin", data);

//Products
export const getAllProducts = async (filter) =>
  await API.get(`/products?${filter}`);

export const getProductDetails = async (id) => await API.get(`/products/${id}`);