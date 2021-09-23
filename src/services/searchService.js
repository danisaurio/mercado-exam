import axios from "axios";

export const HTTP = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 10000,
  });

const getRequest = async (route) => {
    let response;
    try {
        response = await HTTP.get(route);
    } catch (ex) {
        throw new Error(ex.message);
    }
    return response;
};

const searchProducts = async (query) => {
    let response = await getRequest(`items?q=${query}`);
    return response;
};

const getProductInformation = async (productId) => {
    let response = await getRequest(`items/${productId}`);
    return response;
};

export { searchProducts, getProductInformation, getRequest }
