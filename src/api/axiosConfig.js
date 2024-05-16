import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "http://159.65.148.190:8000/api",
});

axiosInstance.interceptors.request.use((config) => {
  try {
    const token = typeof window !== 'undefined' ?window.localStorage.getItem("userAccessToken"):null;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  } catch (error) {
    return config;
  }
});

axiosInstance.interceptors.response.use(
  (response) => {
    response.data = { ...response.data, status: response.status };
    return response;
  },
  (error) => {
    // Handle other response errors here if needed
    if (error.request.status == 401 && typeof window !== 'undefined') {
      window.localStorage.removeItem("userAccessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
