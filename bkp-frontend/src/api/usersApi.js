import adminAxiosInstance from "./adminAxiosConfig";
import axiosInstance from "./axiosConfig";
const userCount = async () => {
  try {
    const { data } = await adminAxiosInstance.get("/users/count");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const userSearchRecord = async (payload) => {
  try {
    const { data } = await axiosInstance.post(
      "/userSearchRecord/create",
      payload
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getAllUserSearchRecord = async () => {
  try {
    const { data } = await adminAxiosInstance.get("/userSearchRecord");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default { userCount, userSearchRecord, getAllUserSearchRecord };
