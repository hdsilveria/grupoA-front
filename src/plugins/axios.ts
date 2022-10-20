import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

let instance = api

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

instance.interceptors.response.use(function(response) { 
    return response;
},(error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token')
        return Promise.resolve();
    }
    return Promise.reject(error);
})