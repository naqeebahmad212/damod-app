import adminAxiosInstance from "./adminAxiosConfig";
import axiosInstance from "./axiosConfig";
const create = async (payload) => {
  try {
    const { data } = await axiosInstance.post("/contact/create", payload);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const findAll = async (payload) => {
  try {
    const { data } = await adminAxiosInstance.get("/contact");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default {
  create,
  findAll,
};
