import axios from "axios";

const adminAxiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "http://159.65.148.190:8000/api",
});

adminAxiosInstance.interceptors.request.use((config) => {
  try {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("adminToken") : null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (error) {
    return config;
  }
});

adminAxiosInstance.interceptors.response.use(
  (response) => {
    response.data = { ...response.data, status: response.status };
    return response;
  },
  (error) => {
    // Handle other response errors here if needed
    if (error.request.status == 401) {
      if(typeof window !== 'undefined') {
        localStorage.removeItem("adminToken");
        window.location.href = "login";
      }
    }
    return Promise.reject(error);
  }
);

export default adminAxiosInstance;
