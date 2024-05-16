import axiosInstance from "./axiosConfig";

const login = async (logindata) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", logindata);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const register = async (registerData) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", registerData);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default { login, register };
