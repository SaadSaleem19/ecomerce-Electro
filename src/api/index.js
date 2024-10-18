import axios from "axios";

export const apiServices = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 3000,
    headers: {
   "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userData"))?.accessToken}`
    },
    }
  );