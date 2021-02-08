import axios from "axios";

import errorHandler from "./errorHandler";

const instance = axios.create({
 //baseURL: 'http://localhost:2000/',
 baseURL: 'https://api.bwamicro.com/'

 //baseURL: `${process.env.REACT_APP_API_HOST}`,
// headers:"application/json"
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export { default as setAuthorizationHeader } from "./setAuthorizationHeader";

export default instance;
